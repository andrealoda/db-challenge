const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');

// Rotta per ottenere informazioni social
router.get('/', socialController.getSocialInfo);

router.get('/users', socialController.getAllUsers); // Aggiunta della rotta per ottenere tutti gli utenti    

router.get('/users/:id', socialController.getUserDetails); 

router.get('/posts', socialController.getAllPosts);

module.exports = router;