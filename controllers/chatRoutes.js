const router = require('express').Router();
const { Message } = require('../models');
const withAuth = require('../utils/Auth');

router.get('/messages', async (req, res) => {
    try {
        const messageData = Message.findAll();
        res.status(200).json(messageData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// router.get('/', async (req, res) => {
//     try {
//         const messageData = Message.findAll();
//         const messages = messageData.map((message) => message.get({ plain: true }));

//         res.render('chat/messages', {
//             messages,
//             // loggedIn: req.session.loggedIn,
//         });
//     } catch (err) {
//     res.status(500).json(err);
// }
// });

router.get('/', (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        res.render('chat', {loggedIn: req.session.loggedIn});
    }
})

module.exports = router;