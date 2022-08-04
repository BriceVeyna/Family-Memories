const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        text: 'Comment 1',
        file_id: 1
    },
    {
        user_id: 2,
        text: 'Comment 2',
        file_id: 2
    },
    {
        user_id: 3,
        text: 'Comment 3',
        file_id: 3
    },
    {
        user_id: 1,
        text: 'Comment 4',
        file_id: 4
    },
    {
        user_id: 2,
        text: 'Comment 5',
        file_id: 5
    },
    {
        user_id: 3,
        text: 'Comment 6',
        file_id: 6
    },
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;