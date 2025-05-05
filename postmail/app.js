require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Usuario = require('./models/usuario');
const Envio = require('./models/envio');

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => {
    console.error('Error conectando a MongoDB:', err);
    process.exit(1);
  });

// POST - Crear usuario
app.post('/usuario', async (req, res) => {
  try {
    const { nombre, credito, costoEnvio, enviosDisponibles } = req.body;
    const nuevoUsuario = new Usuario({ nombre, credito, costoEnvio, enviosDisponibles });
    await nuevoUsuario.save();
    res.status(201).json({ mensaje: 'Usuario creado', usuario: nuevoUsuario });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// GET - Consultar crédito de un usuario
app.get('/usuario/:id/creditos', async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    res.json({ credito: usuario.credito });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al obtener créditos' });
  }
});

// POST - Registrar envío
app.post('/envios', async (req, res) => {
  try {
    const { usuarioId, nombre, direccion, telefono, referencia, observacion, producto } = req.body;

    const usuario = await Usuario.findById(usuarioId);
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const peso = parseFloat(producto.peso);
    if (isNaN(peso)) return res.status(400).json({ mensaje: 'Peso inválido' });

    let costo = peso <= 3 ? 1 : Math.ceil(peso / 3);
    if (usuario.credito < costo) return res.status(400).json({ mensaje: 'Créditos insuficientes' });

    const nuevoEnvio = new Envio({
      usuarioId,
      nombre,
      direccion,
      telefono,
      referencia,
      observacion,
      producto,
      costoCobrado: costo
    });

    await nuevoEnvio.save();
    usuario.credito -= costo;
    usuario.enviosDisponibles -= 1;
    await usuario.save();

    res.json({ mensaje: 'Envío registrado', envio: nuevoEnvio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al registrar envío' });
  }
});

// GET - Consultar envíos por usuario
app.get('/envios/:usuarioId', async (req, res) => {
  try {
    const envios = await Envio.find({ usuarioId: req.params.usuarioId });
    res.json(envios);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al consultar envíos' });
  }
});

// DELETE - Eliminar envío y devolver crédito
app.delete('/envios/:envioId', async (req, res) => {
  try {
    const envio = await Envio.findById(req.params.envioId);
    if (!envio) return res.status(404).json({ mensaje: 'Envío no encontrado' });

    const usuario = await Usuario.findById(envio.usuarioId);
    if (!usuario) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const peso = envio.producto.peso;
    const credito = peso <= 3 ? 1 : Math.ceil(peso / 3);

    usuario.credito += credito;
    usuario.enviosDisponibles += 1;
    await usuario.save();
    await envio.deleteOne();

    res.json({ mensaje: 'Envío eliminado y crédito reembolsado' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al eliminar envío' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
