const assert = require('assert');

const feedbackSummary = require('../src/services/feedbackSummary');

describe('Feedback Summary', function() {
    it('should return empty sum when used with empty array', function() {
        assert.deepEqual(feedbackSummary([], []), {});
    });
    it('should return correct sum given one feedback', function() {
        assert.deepEqual(feedbackSummary([
            {
                talkSlug: 'a',
                rating: 5,
                comment: 'comment'
            }
        ], ['a']), {
            'a': {
                starCount: {
                    5: 1,
                    4: 0,
                    3: 0,
                    2: 0,
                    1: 0
                },
                average: 5,
                feedbackCount: 1,
                comments: [{
                    text: 'comment',
                    rating: 5
                }]
            }
        });
    });
    it('should return correct sum given many different feedback', function() {
        assert.deepEqual(feedbackSummary([
            {
                talkSlug: 'a',
                rating: 5,
                comment: 'comment'
            },
            {
                talkSlug: 'a',
                rating: 3,
                comment: ''
            },
            {
                talkSlug: 'a',
                rating: 1,
                comment: 'bad comment'
            }
        ], ['a']), {
            'a': {
                starCount: {
                    5: 1,
                    4: 0,
                    3: 1,
                    2: 0,
                    1: 1
                },
                average: 3,
                feedbackCount: 3,
                comments: [{
                    text: 'comment',
                    rating: 5
                }, {
                    text: 'bad comment',
                    rating: 1
                }]
            }
        });
    });

    it('should return correct sum given many different feedback on many talks', function() {
        assert.deepEqual(feedbackSummary([
            {
                talkSlug: 'a',
                rating: 5,
                comment: 'comment'
            },
            {
                talkSlug: 'b',
                rating: 2,
                comment: ''
            },
            {
                talkSlug: 'a',
                rating: 3,
                comment: 'bad comment'
            }
        ], ['a', 'b']), {
            'a': {
                starCount: {
                    5: 1,
                    4: 0,
                    3: 1,
                    2: 0,
                    1: 0
                },
                average: 4,
                feedbackCount: 2,
                comments: [{
                    text: 'comment',
                    rating: 5
                }, {
                    text: 'bad comment',
                    rating: 3
                }]
            },
            'b': {
                starCount: {
                    5: 0,
                    4: 0,
                    3: 0,
                    2: 1,
                    1: 0
                },
                average: 2,
                feedbackCount: 1,
                comments: []
            }
        });
    });
    it('should return empty summaries for talks without feedback', function() {
        assert.deepEqual(feedbackSummary([
            {
                talkSlug: 'a',
                rating: 5,
                comment: 'comment'
            }
        ], ['a', 'b', 'c']), {
            'a': {
                starCount: {
                    5: 1,
                    4: 0,
                    3: 0,
                    2: 0,
                    1: 0
                },
                average: 5,
                feedbackCount: 1,
                comments: [{
                    text: 'comment',
                    rating: 5
                }]
            },
            'b': {
                starCount: {
                    5: 0,
                    4: 0,
                    3: 0,
                    2: 0,
                    1: 0
                },
                average: 0,
                feedbackCount: 0,
                comments: []
            },
            'c': {
                starCount: {
                    5: 0,
                    4: 0,
                    3: 0,
                    2: 0,
                    1: 0
                },
                average: 0,
                feedbackCount: 0,
                comments: []
            }
        });
    });
    it('should ignore feedback not matching with asked talks', function() {
        assert.deepEqual(feedbackSummary([
            {
                talkSlug: 'b',
                rating: 5,
                comment: 'comment'
            }
        ], ['a']), {
            'a': {
                starCount: {
                    5: 0,
                    4: 0,
                    3: 0,
                    2: 0,
                    1: 0
                },
                average: 0,
                feedbackCount: 0,
                comments: []
            }
        });
    });
});
