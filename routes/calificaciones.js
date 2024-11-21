const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Registrar calificaciones
router.post('/registrar', (req, res) => {
  const { estudiante_id, materia, calificacion } = req.body;
  const query = 'INSERT INTO calificaciones (estudiante_id, materia, calificacion) VALUES (?, ?, ?)';
  db.query(query, [estudiante_id, materia, calificacion], (err, result) => {
    if (err) {
      return res.status(500).send('Error registrando calificación');
    }
    res.status(201).send('Calificación registrada');
  });
});

// Consultar calificaciones de un estudiante
router.get('/consultar/:estudiante_id', (req, res) => {
  const { estudiante_id } = req.params;
  const query = 'SELECT * FROM calificaciones WHERE estudiante_id = ?';
  db.query(query, [estudiante_id], (err, results) => {
    if (err) {
      return res.status(500).send('Error consultando calificaciones');
    }
    res.status(200).json(results);
  });
});

module.exports = router;
