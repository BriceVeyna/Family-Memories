const router = require("express").Router();
const { File } = require("../../models");

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

// get all users
router.get("/", async (req, res) => {
  try {
    const fileData = await File.findAll();
    res.status(200).json(fileData);
  } catch (err) {
    res.status(500).json(err);
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

router.delete("/:id", withAuth, async (req, res) => {
    try {
      const fileData = await File.destroy(req.body, {
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
