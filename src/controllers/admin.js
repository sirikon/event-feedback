const talks = require('../data/talks');
const feedbacks = require('../data/feedbacks');
const feedbackSummary = require('../services/feedbackSummary');

function getIndex(req, res) {
    feedbacks.all()
        .then((feedbackList) => {

            const talkList = talks.all();
            const talkSlugs = talkList.map(t => t.slug);
            const summaries = feedbackSummary(feedbackList, talkSlugs);
            let feedbackCount = 0;

            talkList.forEach((talk) => {
                talk.summary = summaries[talk.slug];
                feedbackCount += talk.summary.feedbackCount;
            });

            res.render('pages/admin', { talks: talkList, feedbackCount });
        })
}

module.exports = { getIndex };
