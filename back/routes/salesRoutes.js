const express = require('express');
const router = express.Router();
const { getAllSales, getSaleById, createSale } = require('../controllers/salesController');
const { verifyToken } = require('../middlewares/auth');

module.exports = router;
// Liste de tous les sales et protéger la routes avec le middleware verifyToken
router.get('/', verifyToken, getAllSales);

// Récupérer un xx par ID
router.get('/:id', getSaleById);

// Créer un nouveau sale  et protéger la route avec le middleware verifyToke
router.post('/', verifyToken, createSale);

module.exports = router;
