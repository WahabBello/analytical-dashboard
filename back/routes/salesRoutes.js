const express = require('express');
const { getAllSales, getSaleById, createSale } = require('../controllers/salesController');

const router = express.Router();

// Liste de tous les xxs
router.get('/', getAllSales);

// Récupérer un xx par ID
router.get('/:id', getSaleById);

// Créer un nouveau xx
router.post('/', createSale);

module.exports = router;
