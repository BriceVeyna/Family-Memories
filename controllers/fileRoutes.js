const router = require("express").Router();
const { File, Comment } = require("../models");
const withAuth = require("../utils/Auth");

// render new file form
router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    res.render("fileForm", { loggedIn: req.session.loggedIn });
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const fileData = await File.create({
      name: req.body.name,
      description: req.body.description,
      url: req.body.url,
      user_id: req.session.user_id,
    });

    res.status(200).json(fileData);
    console.log("great");
  } catch (err) {
    console.log("boo");
    res.status(400).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      user_id: req.session.user_id,
      text: req.body.text,
      file_id: req.file.file_id
    });

    res.status(200).json(commentData);
    console.log("great");
  } catch (err) {
    console.log("boo");
    res.status(400).json(err);
  }
});

// render file by id
router.get("/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    res.render("file", { loggedIn: req.session.loggedIn });
  }
});

module.exports = router;
