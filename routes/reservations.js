const express = require('express');
const router = express.Router();
const reservationsController = require('../controllers/reservationController');

// Swagger documentation
/**
 * @swagger
/**
 * @swagger
 * /reservations:
 *   get:
 *     summary: Obtiene todas las reservas
 *     description: Devuelve una lista con todas las reservas.
 *     responses:
 *       200:
 *         description: Lista de reservas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idreservations:
 *                     type: integer
 *                   date:
 *                     type: string
 *                   time:
 *                     type: string
 *                   user_iduser:
 *                     type: integer
 */
router.get('/', reservationsController.getAll);

// GET /api/reservations/:id
/**
 * @swagger
 * /reservations/{id}:
 *   get:
 *     summary: Obtiene una reserva por ID
 *     description: Devuelve los detalles de una reserva específica.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reserva a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la reserva.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idreservations:
 *                   type: integer
 */
router.get('/:id', reservationsController.getById);

// POST /api/reservations
/**
 * @swagger
 * /reservations:
 *   post:
 *     summary: Crea una nueva reserva
 *     description: Crea una nueva reserva en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 *               user_iduser:
 *                 type: integer
 */
router.post('/', reservationsController.create);

// PUT /api/reservations/:id
/**
 * @swagger
 * /reservations/{id}:
 *   put:
 *     summary: Actualiza una reserva existente
 *     description: Actualiza los detalles de una reserva específica.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reserva a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               date:
 *                 type: string
 *               time:
 *                 type: string
 */
router.put('/:id', reservationsController.update);

// DELETE /api/reservations/:id
/**
 * @swagger
 * /reservations/{id}:
 *   delete:
 *     summary: Elimina una reserva
 *     description: Elimina una reserva específica de la base de datos.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la reserva a eliminar.
 *         schema:
 *           type: integer
 */
router.delete('/:id', reservationsController.remove);

module.exports = router;
