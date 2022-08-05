const router = require("express").Router();
const { Family } = require("../../models");
const withAuth = require('../../utils/Auth');

// get all families
router.get("/", async (req, res) => {
    try {
      const familyData = await Family.findAll();
      res.status(200).json(familyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// create new family
router.post("/", withAuth, async (req, res) => {
  try {
    const familyData = await Family.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(familyData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//edit new family
router.put("/:id", withAuth, async (req, res) => {
  try {
    const familyData = await Family.update(req.body, {
      where: { id: req.params.id },
    });
    if (!familyData) {
      res.status(400).json({ message: "No family found with this id." });
      return;
    }
    res.status(200).json(familyData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
    try {
      const familyData = await Family.destroy(req.body, {
        where: { id: req.params.id },
      });
      if (!familyData) {
        res.status(400).json({ message: "No family found with this id." });
        return;
      }
      res.status(200).json(familyData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
