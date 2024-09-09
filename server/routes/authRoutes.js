const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

// User Signup
router.post('/signup', authController.signup); 
// User Login
router.post('/login', authController.login); 

router.get('/profile', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'This is a protected route' });
});

module.exports = router;
