const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Obtener todos los estudiantes
router.get('/', (req, res) => {
  const query = 'SELECT * FROM estudiantes';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send('Error obteniendo estudiantes');
    }
    res.status(200).json(results);
  });
});

module.exports = router;
