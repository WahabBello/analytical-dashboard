const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true }, // Quantité disponible
  category: { type: String }, // Catégorie pour le regroupement
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);
