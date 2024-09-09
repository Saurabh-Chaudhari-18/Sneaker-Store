const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Get cart items
router.get('/', authMiddleware, cartController.getCartItems);

// Add to cart
router.post('/', authMiddleware, cartController.addToCart);

// Remove from cart
router.delete('/', authMiddleware, cartController.removeFromCart);

module.exports = router;
