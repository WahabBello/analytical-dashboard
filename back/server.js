// Importation des modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Initialisation de l'application Express
const app = express();

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

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
