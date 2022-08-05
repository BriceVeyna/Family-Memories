const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        text: "I think that's Joe next to Randy on the tractor.",
        file_id: 1
    },
    {
        user_id: 1,
        text: 'The lady gardening is Jean Brown.',
        file_id: 2
    },
    {
        user_id: 1,
        text: "I think that's Steve swimming with Colleen.",
        file_id: 3
    },
    {
        user_id: 1,
        text: "That's Frisco on stage with Collen.",
        file_id: 4
    },
    {
        user_id: 1,
        text: "The easter egg hunt looks like it's at Sundale.",
        file_id: 5
    },
    {
        user_id: 1,
        text: 'That looks like maybe Ken and Joe in the fog.',
        file_id: 6
    },
    {
        user_id: 2,
        text: "That's Chelsea, Chelsea Rose, and Zack.",
        file_id: 7
    },
    {
        user_id: 2,
        text: "That's mom and Chelsea.",
        file_id: 8
    },
    {
        user_id: 2,
        text: "That's grandma Rose.",
        file_id: 9
    },
    {
        user_id: 3,
        text: "Phil's file.",
        file_id: 10
    },
];

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;