const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  credito: Number,
  costoEnvio: Number,
  enviosDisponibles: Number
});

module.exports = mongoose.model('Usuario', usuarioSchema); 
