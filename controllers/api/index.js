const router = require('express').Router();

const UserRoutes = require('./user-routes.js');

router.use('/users', UserRoutes);

module.exports = router;