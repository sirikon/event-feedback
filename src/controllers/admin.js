const talks = require('../data/talks');
const feedbacks = require('../data/feedbacks');

function getIndex(req, res) {
    feedbacks.all()
        .then((feedbackList) => {
            var talkList = talks.all();

            var talkIndex = {};

            var feedbackCount = 0;

            talkList.forEach((talk) => {
                talk._5starsCount = 0;
                talk._4starsCount = 0;
                talk._3starsCount = 0;
                talk._2starsCount = 0;
                talk._1starsCount = 0;
                talk._average = 0;
                talk._feedbackCount = 0;
                talk._comments = [];
                talkIndex[talk.slug] = talk;
            })

            feedbackList.forEach((feedback) => {
                var talk = talkIndex[feedback.talkSlug];

                if (!talk) return;

                feedbackCount++;

                if (feedback.comment) {
                    talk._comments.push(`[${feedback.rating} stars] ${feedback.comment}`);
                }

                talk[`_${feedback.rating}starsCount`]++;
            })

            talkList.forEach((talk) => {
                var total = 0;
                var count = 0;
                for(var i = 1; i <= 5; i++) {
                    total += talk[`_${i}starsCount`] * i;
                    count += talk[`_${i}starsCount`]
                }

                for(var i = 1; i <= 5; i++) {
                    talk[`_${i}starsPercent`] = (talk[`_${i}starsCount`] / count) * 100;
                }

                talk._feedbackCount = count;

                if (count === 0) {
                    return;
                }

                talk._average = Math.round((total / count) * 100) / 100;
            })

            res.render('pages/admin', { talks: talkList, feedbackCount });
        })
}

module.exports = { getIndex }
