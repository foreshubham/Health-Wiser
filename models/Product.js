const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  barcode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  ingredients: [String],
  simplifiedIngredients: [String],
  allergens: [String],
  alternatives: [String],
  healthStatus: { type: String, required: true },
  imageUrl: { type: String },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
