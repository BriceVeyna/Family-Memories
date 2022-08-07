const router = require("express").Router();
const { File } = require("../../models");
const withAuth = require("../../utils/Auth");

// // get all files
// router.get("/", async (req, res) => {
//   try {
//     const fileData = await File.findAll();
//     res.status(200).json(fileData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// render new file form
router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    res.render("fileForm", { loggedIn: req.session.loggedIn });
  }
});

// render file page by id
router.get("/:id", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    res.render("file", { loggedIn: req.session.loggedIn });
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

// edit file
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

// delete file
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