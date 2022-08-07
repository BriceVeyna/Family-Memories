const router = require('express').Router();

const apiRoutes = require('./api');
const chatRoutes = require('./chatRoutes');
const homeRoutes = require('./homeRoutes');
const fileRoutes = require('./fileRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/chat', chatRoutes);
router.use('/file', fileRoutes);


module.exports = router;