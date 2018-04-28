const talks = require('../data/talks');

function getIndex(req, res) {
    const talkList = talks.all();
    talkList.forEach((talk) => {
        talk._feedbackReceived = !!req.session['feedbackReceived_' + talk.slug]
    });
    res.render('pages/index', { talks: talkList });
}

module.exports = { getIndex };
