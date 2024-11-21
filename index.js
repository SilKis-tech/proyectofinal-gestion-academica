const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const usuariosRoutes = require('./routes/usuarios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/usuarios', usuariosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const asistenciaRoutes = require('./routes/asistencia');
const calificacionesRoutes = require('./routes/calificaciones');

app.use('/asistencia', asistenciaRoutes);
app.use('/calificaciones', calificacionesRoutes);

const estudiantesRoutes = require('./routes/estudiantes');

app.use('/estudiantes', estudiantesRoutes);
