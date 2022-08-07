const router = require("express").Router();
const { File } = require("../models");
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
      // family_id: req.body.family_id,
    });

    res.status(200).json(fileData);
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
