const express = require('express');
const { addProduct, getProductByBarcode } = require('../controllers/productController');

const router = express.Router();

// Route to add product
router.post('/add', addProduct);

// Route to get product by barcode
router.get('/scan/:barcode', getProductByBarcode);

module.exports = router;
