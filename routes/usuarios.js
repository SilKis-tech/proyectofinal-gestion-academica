const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Crear usuario
router.post('/crear', (req, res) => {
  const { nombre, email, contrasena, rol } = req.body;
  const query = 'INSERT INTO usuarios (nombre, email, contrasena, rol) VALUES (?, ?, ?, ?)';
  db.query(query, [nombre, email, contrasena, rol], (err, result) => {
    if (err) {
      return res.status(500).send('Error creando usuario');
    }
    res.status(201).send('Usuario creado');
  });
});

// Actualizar usuario
router.put('/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email, contrasena, rol } = req.body;
    const query = 'UPDATE usuarios SET nombre = ?, email = ?, contrasena = ?, rol = ? WHERE id = ?';
    db.query(query, [nombre, email, contrasena, rol, id], (err, result) => {
      if (err) {
        return res.status(500).send('Error actualizando usuario');
      }
      res.status(200).send('Usuario actualizado');
    });
  });
  
  // Eliminar usuario
  router.delete('/eliminar/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM usuarios WHERE id = ?';
    db.query(query, [id], (err, result) => {
      if (err) {
        return res.status(500).send('Error eliminando usuario');
      }
      res.status(200).send('Usuario eliminado');
    });
  });
  

module.exports = router;

