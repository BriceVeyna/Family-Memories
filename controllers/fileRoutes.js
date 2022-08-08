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
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/:id", withAuth, async (req, res) => {
  console.log("post working", req.body)
  try {
    const commentData = await Comment.create({
      user_id: req.session.user_id,
      text: req.body.commentText,
      file_id: req.params.id,
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// render file by id
router.get("/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    File.findOne({
      where: {
        id: req.params.id,
      },
      include: [Comment],
    }).then((fileInfo) => {
      const cleanFileInfo = fileInfo.get({ plain: true });
      console.log(cleanFileInfo.comments[0].text);
      res.render("file", { loggedIn: req.session.loggedIn, cleanFileInfo });
    });
  }
});

module.exports = router;
