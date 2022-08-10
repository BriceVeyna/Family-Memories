const router = require('express').Router();
const { File } = require('../models');
const withAuth = require('../utils/Auth');

// Render all files
router.get('/', withAuth, async (req, res) => {
  try {
    const fileData = await File.findAll({
      order: [['name', 'ASC']],
    });

    const files = fileData.map((file) => file.get({ plain: true }));

    res.render('homepage', {
      files,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render homepage if logged in from login page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// Render hompage if logged in from sign up page
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
