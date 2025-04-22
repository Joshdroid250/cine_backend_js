require('dotenv').config();
const express = require('express');
const cors = require('cors');
// si decides ya no usar body‑parser, puedes quitar esta línea
const bodyParser = require('body-parser');

const app = express();
const authRoutes = require('./routes/auth');
const movieRoutes = require('./routes/movie');
const roomRoutes = require('./routes/rooms'); // Asegúrate de que la ruta sea correcta
const seatRoutes = require('./routes/seats'); // Asegúrate de que la ruta sea correcta
// Middlewares
// parsear JSON (desde Express 4.16+ puedes usar directamente express.json())
app.use(express.json());
// si sigues con body‑parser:
// app.use(bodyParser.json());

app.use(cors());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/rooms', roomRoutes); // Asegúrate de que la ruta sea correcta
app.use('/api/seats', seatRoutes); // Asegúrate de que la ruta sea correcta

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
