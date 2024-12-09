const products = []; // Base de données fictive

// Récupérer tous les produits
exports.getAllProducts = (req, res) => {
  res.status(200).json({ products });
};

// Récupérer un produit par ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));
  if (!product) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }
  res.status(200).json({ product });
};

// Créer un nouveau produit
exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json({ message: 'Produit créé avec succès', product: newProduct });
};

