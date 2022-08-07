const router = require("express").Router();
const { File } = require("../../models");
const withAuth = require("../../utils/Auth");

//get all files
router.get("/", async (req, res) => {
  try {
    const fileData = await File.findAll();
    res.status(200).json(fileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get file by id
router.get('/:id', async (req, res) => {
  try {
      const fileData = await File.findByPk(req.params.id)
      if (!fileData) {
          res.status(404).json({ message: "No file found with that id." });
          return;
      }
      res.status(200).json(fileData);
  } catch (err) {
      res.status(500).json(err);
  }
});

//create file
router.post('/', withAuth, async (req, res) => {
  try {
    const fileData = await File.create({
      name: req.body.name,
      description: req.body.description,
      url: req.body.url,
      user_id: req.body.user_id,
      family_id: req.body.family_id
    });
    res.status(200).json(fileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//edit file by id
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

//delete file by id
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