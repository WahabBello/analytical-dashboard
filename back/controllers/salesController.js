const Sale = require('../models/salesModel');

// Récupérer tous les ventes
exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find(); 
    res.status(200).json(sales);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des ventes', error: err });
  }
};

// Récupérer par ID
exports.getSaleById = (req, res) => {
  const { id } = req.params;
  const sale = Sale.find(p => p.id === parseInt(id));
  if (!sale) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }
  res.status(200).json({ sale });
};

// Créer 

exports.createSale = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = new Sale({ name, price });
    await newSale.save();
    res.status(201).json({ message: 'Vente ajouté avec succès', product: newProduct });
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la création', error: err });
  }
};