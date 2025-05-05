const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema({
  usuarioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario' 
  },
  nombre: String,
  direccion: String,
  telefono: String,
  referencia: String,
  observacion: String,
  producto: {
    descripcion: String,
    peso: Number,
    bultos: Number,
    fecha_entrega: Date
  },
  costoCobrado: Number
});

module.exports = mongoose.model('Envio', envioSchema);
