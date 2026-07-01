const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');

// Rotta per ottenere informazioni social
router.get('/', socialController.getSocialInfo);

// Rotta per ottenere dettagli utente
router.get('/:id', socialController.getUserDetails);

module.exports = router;