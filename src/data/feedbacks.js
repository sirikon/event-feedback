const { Feedback } = require('./models/index');

module.exports = {
    create (talkSlug, feedback, ip, userId) {
        return Feedback.create({
            talkSlug,
            ip,
            userId,
            date: new Date(),
            ...feedback
        });
    },
    all () {
        return Feedback.findAll();
    }
};
