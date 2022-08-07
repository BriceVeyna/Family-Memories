const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/Auth');

//get all comments
router.get('/', async (req, res) => {
    try {
      const commentData = await Comment.findAll();
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//get comment by id
router.get('/:id', async (req, res) => {
    try {
        const commentData = await Comment.findByPk(req.params.id)
        if (!commentData) {
            res.status(404).json({ message: "No comment found with that id." });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//create comment
router.post('/', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    // pull file id in new comment
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//edit comment by id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.update(req.body, {
            where: { id: req.params.id },
        });
        if (!commentData) {
            res.status(404).json({ message: "No comment found with that id." });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//delete comment by id
router.delete("/:id", withAuth, async (req, res) => {
    try {
      const commentData = await Comment.destroy({
        where: { id: req.params.id },
      });
      if (!commentData) {
        res.status(404).json({ message: "No comment found with this id." });
        return;
      }
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;