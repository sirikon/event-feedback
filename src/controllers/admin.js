const talks = require('../data/talks');
const feedbacks = require('../data/feedbacks');
const feedbackSummary = require('../services/feedbackSummary');

function getIndex(req, res) {
    feedbacks.all()
        .then((feedbackList) => {

            var talkList = talks.all();
            var talkSlugs = talkList.map(t => t.slug);
            var summaries = feedbackSummary(feedbackList, talkSlugs);
            var feedbackCount = 0;

            talkList.forEach((talk) => {
                talk.summary = summaries[talk.slug];
                feedbackCount += talk.summary.feedbackCount;
            });

            res.render('pages/admin', { talks: talkList, feedbackCount });
        })
}

module.exports = { getIndex }
