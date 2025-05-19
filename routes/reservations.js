const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationController');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt'); // Añade esta línea
require('dotenv').config();

// Middleware de autenticación mejorado

const authenticateToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
      console.log('No token provided');
      return res.sendStatus(401);
    }

    
    jwt.verify(token, config.secret, (err, user) => {
      if (err) {
        console.log('Token verification error:', err.message);
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } catch (error) {
    console.error('Authentication error:', error);
    return res.sendStatus(500);
  }
};

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * tags:
 *   name: Reservations
 *   description: Gestión de reservaciones de cine
 */

/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Obtener todas las reservaciones
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reservation'
 */
router.get('/', authenticateToken, reservationsController.getAll);

/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Obtener una reservación por ID
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la reservación
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 */
router.get('/:id', authenticateToken, reservationsController.getById);

/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Crear nueva reservación
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReservationInput'
 *     responses:
 *       201:
 *         description: Reservación creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Reservation'
 */
router.post('/', authenticateToken, reservationsController.create);

/**
 * @swagger
 * /reservations/{id}:
 *   put:
 *     summary: Actualizar reservación
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ReservationInput'
 *     responses:
 *       200:
 *         description: Reservación actualizada
 */
router.put('/:id', authenticateToken, reservationsController.update);

/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Eliminar reservación
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Reservación eliminada
 */
router.delete('/:id', authenticateToken, reservationsController.remove);

/**
 * @swagger
 * components:
 *   schemas:
 *     Reservation:
 *       type: object
 *       properties:
 *         idreservations:
 *           type: integer
 *         date:
 *           type: string
 *           format: date
 *           example: "2025-04-13"
 *         idfuncion:
 *           type: integer
 *         fila:
 *           type: integer
 *         columna:
 *           type: integer
 *         users_iduser:
 *           type: integer
 * 
 *     ReservationInput:
 *       type: object
 *       properties:
 *         date:
 *           type: string
 *           format: date
 *           example: "2025-04-13"
 *         idfuncion:
 *           type: integer
 *         fila:
 *           type: integer
 *         columna:
 *           type: integer
 *         users_iduser:
 *           type: integer
 */

/**
 * @swagger
 * /reservations/occupied-seats/{idfuncion}:
 *   get:
 *     summary: Obtener asientos ocupados para una función
 *     tags: [Reservations]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idfuncion
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de asientos ocupados
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 occupiedSeats:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       fila:
 *                         type: integer
 *                       columna:
 *                         type: integer
 */
router.get('/occupied-seats/:idfuncion', authenticateToken, reservationsController.getOccupiedSeats);

module.exports = router;