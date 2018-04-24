const talks = require('../data/talks');
const feedbacks = require('../data/feedbacks');

function getTalkById(req, res) {
    var talk = talks.getBySlug(req.params.slug);

    if (!talk) {
        res.sendStatus(404);
        return;
    }

    res.render('pages/talk', { talk, feedbackReceived: !!req.session['feedbackReceived_' + req.params.slug] });
}

function validateFeedback(feedback) {
    if (feedback.rating === NaN) {
        return false;
    }
    if (feedback.rating < 1 || feedback.rating > 5) {
        return false;
    }
    if (feedback.comment.length > 300) {
        return false;
    }
    return true;
}

function parseFeedback(body) {
    return {
        rating: parseInt(body.rating),
        comment: body.comment
    }
}

function postFeedback(req, res) {
    var talk = talks.getBySlug(req.params.slug);

    if (!!req.session['feedbackReceived_' + req.params.slug]) {
        return res.render('pages/talk', { talk, feedbackReceived: true });
    }

    var feedback = parseFeedback(req.body);
    if (!validateFeedback(feedback)) {
        return res.sendStatus(400);
    }

    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    feedbacks.create(req.params.slug, feedback, ip, req.session.id)
        .then(() => {
            req.session['feedbackReceived_' + req.params.slug] = true
            res.render('pages/talk', { talk, feedbackReceived: true });
        }, (err) => {
            console.log(err);
            res.sendStatus(500);
        });
}

module.exports = { getTalkById, postFeedback }
