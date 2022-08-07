const router = require('express').Router();

const apiRoutes = require('./api');
const chatRoutes = require('./chatRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/chat', chatRoutes);


module.exports = router;
