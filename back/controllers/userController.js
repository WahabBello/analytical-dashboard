const User = require('../models/userModel');

// Récupérer tous les utilisateurs
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs', error: err });
  }
};

// Ajouter un nouveau user
exports.createUser = async (req, res) => {
  // try {
  //   const { name, firstname } = req.body;
  //   const newUser = new User({ name, firstname });
  //   await newUser.save(); 
  //   res.status(201).json({ message: 'User crée avec succès', product: newUser });
  // } catch (err) {
  //   res.status(500).json({ message: 'Erreur lors de la création du user', error: err });
  // }
};

// Récupérer un produit par ID
exports.getUserById = (req, res) => {
  const { id } = req.params;
  const user = User.find(p => p.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: 'Produit non trouvé' });
  }
  res.status(200).json({ user });
};
