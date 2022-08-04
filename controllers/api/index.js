const router = require('express').Router();
const userRoutes = require('./user-routes');
const familyRoutes = require('./family-routes');
const fileRoutes = require('./file-routes');
const commentRoutes = require('./comment-routes');

router.use('/user', userRoutes);
router.use('/family', familyRoutes);
router.use('/file', fileRoutes);
router.use('/file/comment', commentRoutes);

module.exports = router;
