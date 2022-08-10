const router = require('express').Router();
const { Message } = require('../models');
const withAuth = require('../utils/Auth');

// Render all messages
router.get('/', withAuth, async (req, res) => {
        try {
            const messagesData = await Message.findAll();
            const messages = messagesData.map((message) => message.get({ plain: true }))

            res.render('chat', { messages, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.error(err);
        }
});


module.exports = router;