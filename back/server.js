// Importation des modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');

// Middlewares
app.use(cors()); // Autoriser les requêtes Cross-Origin
app.use(bodyParser.json()); // Analyse des requêtes JSON
app.use(bodyParser.urlencoded({ extended: true })); // Analyse des données URL-encoded

// Port d'écoute
const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API REST!');
});

const productRoutes = require('./routes/productRoutes');
const salesRoutes = require('./routes/salesRoutes');
const userRoutes = require('./routes/userRoutes');

// Utilisation des routes
app.use('/products', productRoutes);
app.use('/sales', salesRoutes);
app.use('/users', userRoutes);

// Connection bd 

// console.log('Base de données connectée');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Base de données connectée'))
  .catch(err => console.log('Erreur de connexion :', err));


// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
