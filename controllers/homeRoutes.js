const router = require('express').Router();
const { File } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const fileData = await File.findAll({
      order: [['name', 'ASC']],
    });

    const files = fileData.map((file) => file.get({ plain: true }));

    res.render('homepage', {
      files,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
