const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Aquí irán los endpoints como GET, POST, DELETE, etc.
router.get('/:id/credito', usuarioController.verCredito);


module.exports = router;
