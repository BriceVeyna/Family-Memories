const router = require("express").Router();
const { File } = require("../../models");
const withAuth = require('../../utils/Auth')

// create new file
router.post("/", withAuth, async (req, res) => {
  try {
    const fileData = await File.create({
      name: req.body.name,
      description: req.body.description,
      url: req.body.url,
      user_id: req.session.user_id,
      family_id: req.body.family_id,
    });
    res.status(200).json(fileData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// get all file
router.get("/", async (req, res) => {
  try {
    const fileData = await File.findAll();
    res.status(200).json(fileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  if (!req.session.loggedIn) {
      res.redirect("/login");
  } else {
      res.render("file", {loggedIn: req.session.loggedIn})
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const fileData = await File.update(req.body, {
      where: { id: req.params.id },
    });
    if (!fileData) {
      res.status(400).json({ message: "No file found with this id." });
      return;
    }
    res.status(200).json(fileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a comment
router.post('/', withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
} else {
    res.render("fileForm", {loggedIn: req.session.loggedIn})
}


  // try {
  //   const commentData = await Comment.create({
  //     ...req.body,
  //     user_id: req.session.user_id,
  //   // pull file id in new comment
  //   });
  //   res.status(200).json(commentData);
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
      const fileData = await File.destroy({
        where: { id: req.params.id },
      });
      if (!fileData) {
        res.status(400).json({ message: "No file found with this id." });
        return;
      }
      res.status(200).json(fileData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
