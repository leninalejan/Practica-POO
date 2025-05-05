  // Cargar variables de entorno
  require('dotenv').config();
  const express = require('express');
  const mongoose = require('mongoose');
  const app = express();

  // Modelos
  const Usuario = require('./models/usuario');
  const Envio = require('./models/envio');

  // Middleware
  app.use(express.json());

  // Conexión a MongoDB
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
      const user = await Usuario.findById(req.params.id);
      if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });
      res.json({ credito: user.credito });
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener créditos' });
    }
  });

  // POST - Registrar envío
  app.post('/envios', async (req, res) => {
    try {
      const { usuarioId, nombre, direccion, telefono, referencia, observacion, producto } = req.body;
      const user = await Usuario.findById(usuarioId);
      if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

      let costo = 1;
      const peso = producto.peso;
      if (peso > 3) {
        costo = Math.ceil(peso / 3);
      }

      if (user.credito < costo) {
        return res.status(400).json({ mensaje: 'Créditos insuficientes' });
      }

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
      user.credito -= costo;
      user.enviosDisponibles -= 1;
      await user.save();

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
      res.status(500).json({ error: 'Error al consultar envíos' });
    }
  });

  // DELETE - Eliminar envío y devolver crédito
  app.delete('/envios/:envioId', async (req, res) => {
    try {
      const envio = await Envio.findById(req.params.envioId);
      if (!envio) return res.status(404).json({ mensaje: 'Envío no encontrado' });

      const user = await Usuario.findById(envio.usuarioId);
      if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

      const peso = envio.producto.peso;
      let credito = 1;
      if (peso > 3) {
        credito = Math.ceil(peso / 3);
      }

      user.credito += credito;
      user.enviosDisponibles += 1;
      await user.save();
      await envio.deleteOne();

      res.json({ mensaje: 'Envío eliminado y crédito reembolsado' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar envío' });
    }
  });

  // Puerto
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
