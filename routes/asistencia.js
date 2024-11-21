const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Registrar asistencia
router.post('/registrar', (req, res) => {
  const { estudiante_id, fecha, estado } = req.body;
  const query = 'INSERT INTO asistencia (estudiante_id, fecha, estado) VALUES (?, ?, ?)';
  db.query(query, [estudiante_id, fecha, estado], (err, result) => {
    if (err) {
      return res.status(500).send('Error registrando asistencia');
    }
    res.status(201).send('Asistencia registrada');
  });
});

// Consultar asistencia de un estudiante
router.get('/consultar/:estudiante_id', (req, res) => {
  const { estudiante_id } = req.params;
  const query = 'SELECT * FROM asistencia WHERE estudiante_id = ?';
  db.query(query, [estudiante_id], (err, results) => {
    if (err) {
      return res.status(500).send('Error consultando asistencia');
    }
    res.status(200).json(results);
  });
});

module.exports = router;
