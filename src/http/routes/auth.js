const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middlewares/authMiddleware');
const authController = require('../controllers/authController');

router.route('/login').post(authController.login);

router.route('/verify').get(authMiddleware.ensureAuthenticated, authController.verify);

module.exports = router;
