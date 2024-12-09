const express = require('express');
const { getAllUsers, getUserById, createUser } = require('../controllers/userController');

const router = express.Router();

// Liste de tous les xx
router.get('/', getAllUsers);

// Récupérer un xx par ID
router.get('/:id', getUserById);

// Créer un nouveau xx
router.post('/', createUser);

module.exports = router;
