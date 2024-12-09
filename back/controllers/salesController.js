const sales = []; // Base de données fictive

// Récupérer tous les produits
exports.getAllSales = (req, res) => {
  res.status(200).json({ sales });
};

// Récupérer un produit par ID
exports.getSaleById = (req, res) => {
  const { id } = req.params;
  const sale = sales.find(p => p.id === parseInt(id));
  if (!sale) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }
  res.status(200).json({ sale });
};

// Créer un nouveau produit
exports.createSale = (req, res) => {
  const { name, price } = req.body;
  const newSale = { id: sales.length + 1, name, price };
  sales.push(newSale);
  res.status(201).json({ message: 'Produit créé avec succès', sale: newSale });
};

