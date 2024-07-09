const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { authenticateAdminToken, authenticateToken } = require('../middleware/user.js');

// Create a product
// Ensure the second argument is a function, not an object
router.post('/create', authenticateAdminToken, productController.createProduct);

// Get all products
router.get('/all', productController.getAllProducts);

// Get a product by id
router.get('/get/:id', productController.getProductById);

// Update a product by id
router.put('/update/:id', authenticateAdminToken, productController.updateProduct);

// Delete a product by id
router.delete('/delete/:id', authenticateAdminToken, productController.deleteProduct);

module.exports = router;
