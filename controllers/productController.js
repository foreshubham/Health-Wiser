const Product = require('../models/Product');

// Add product to the database
const addProduct = async (req, res) => {
  try {
    const { barcode, name, ingredients, simplifiedIngredients, allergens, alternatives, healthStatus, imageUrl } = req.body;

    const newProduct = new Product({
      barcode,
      name,
      ingredients,
      simplifiedIngredients,
      allergens,
      alternatives,
      healthStatus,
      imageUrl,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add product', message: error.message });
  }
};

// Get product by barcode
const getProductByBarcode = async (req, res) => {
  try {
    const { barcode } = req.params;
    const product = await Product.findOne({ barcode });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product', message: error.message });
  }
};

module.exports = { addProduct, getProductByBarcode };
