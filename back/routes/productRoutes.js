const express = require('express');
const { getAllProducts, getProductById, createProduct } = require('../controllers/productController');

const router = express.Router();

// Liste de tous les produits
router.get('/', getAllProducts);

// Récupérer un produit par ID
// router.get('/:id', getProductById);

// Créer un nouveau produit
router.post('/', createProduct);

module.exports = router;
