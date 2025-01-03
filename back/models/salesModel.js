const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à un utilisateur
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Référence à un produit
      quantity: { type: Number, required: true },
    },
  ],
  totalAmount: { type: Number, required: true }, // Montant total de la vente
  saleDate: { type: Date, default: Date.now }, // Date de la vente
});

module.exports = mongoose.model('Sale', saleSchema);
