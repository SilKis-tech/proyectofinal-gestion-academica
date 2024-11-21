const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Cambia esto si tienes otro usuario
  password: 'root', // Cambia esto si tienes contraseña
  database: 'SistemaAcademico'
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

app.get('/estudiantes', (req, res) => {
    const query = `
      SELECT estudiantes.id, usuarios.nombre
      FROM estudiantes
      JOIN usuarios ON estudiantes.usuario_id = usuarios.id;
    `;
    
    db.query(query, (err, results) => {
      if (err) {
        console.log('Error al obtener estudiantes:', err);
        res.status(500).json({ error: 'Error al obtener estudiantes' });
      } else {
        res.json(results);
      }
    });
  });



module.exports = connection;
