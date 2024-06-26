const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/signin', authController.signIn);
router.post('/google', authController.googleAuth);
router.get('/signout', authController.signOut);

module.exports = router; 