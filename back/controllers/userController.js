const users = []; // Base de données fictive

// Récupérer tous les produits
exports.getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

// Récupérer un produit par ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.find(p => p.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }
  res.status(200).json({ user });
};

// Créer un nouveau produit
exports.createUser = (req, res) => {
  const { name, price } = req.body;
  const newSale = { id: users.length + 1, name, price };
  users.push(newSale);
  res.status(201).json({ message: 'Produit créé avec succès', user: newUser });
};

