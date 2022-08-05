const router = require('express').Router();
const userRoutes = require('./user-routes');
const familyRoutes = require('./family-routes');
const fileRoutes = require('./file-routes');
const commentRoutes = require('./comment-routes');
const chatRoutes = require('./chat-routes');

router.use('/user', userRoutes);
router.use('/family', familyRoutes);
router.use('/file', fileRoutes);
router.use('/file/comment', commentRoutes);
router.use('/chat', chatRoutes);

module.exports = router;
