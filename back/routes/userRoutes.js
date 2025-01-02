const express = require('express');
const { getAllUsers, getUserById, createUser } = require('../controllers/userController');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Liste de tous les xx
router.get('/', getAllUsers);

// Récupérer un xx par ID
router.get('/:id', getUserById);

// Créer un nouveau xx
router.post('/register', register);

// Se connecter
router.post('/login', login);

module.exports = router;
