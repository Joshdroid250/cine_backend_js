const express = require('express');
const cors = require('cors');
require('dotenv').config();

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Cine',
      version: '1.0.0',
      description: 'Documentación de la API para gestión de películas, salas y asientos',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  // Rutas donde están los comentarios de Swagger
  apis: ['./routes/*.js', './controllers/*.js'], 
};

// Generación de especificaciones Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas
const authRoutes  = require('./routes/auth');
const movieRoutes = require('./routes/movie');
const roomsRoutes = require('./routes/rooms');
const reservations = require('./routes/reservations');
const funcionRoutes = require('./routes/funcion');

app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/reservations', reservations); 
app.use('/api/funcion', funcionRoutes);

 console.log('MYSQLHOST:', process.env.MYSQLHOST);
  console.log('MYSQLUSER:', process.env.MYSQLUSER);
  console.log('MYSQLPASSWORD:', process.env.MYSQLPASSWORD);
  console.log('MYSQLDATABASE:', process.env.MYSQLDATABASE);
  console.log('MYSQLPORT:', process.env.MYSQLPORT);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
