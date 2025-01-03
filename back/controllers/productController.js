const Product = require('../models/productModel');

// Récupérer tous les produits
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // Récupère tous les produits
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des produits', error: err });
  }
};

// Ajouter un nouveau produit
exports.createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Product({ name, price });
    await newProduct.save(); // Enregistre le produit dans MongoDB
    res.status(201).json({ message: 'Produit ajouté avec succès', product: newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création du produit', error: err });
  }
};

// // Récupérer un produit par ID
// exports.getProductById = (req, res) => {
//   const { id } = req.params;
//   const product = Product.find(p => p.id === parseInt(id));
//   if (!product) {
//     return res.status(404).json({ message: 'Produit non trouvé' });
//   }
//   res.status(200).json({ product });
// };



