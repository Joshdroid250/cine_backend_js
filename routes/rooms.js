const express = require('express');
const router = express.Router();
const roomCtrl = require('../controllers/roomsController');

// GET /api/rooms
/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Obtiene todas las salas
 *     description: Devuelve una lista con todas las salas.
 *     responses:
 *       200:
 *         description: Lista de salas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idsalas:
 *                     type: integer
 */
router.get('/', roomCtrl.getAll);

// GET /api/rooms/:id
/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: Obtiene una sala por ID
 *     description: Devuelve los detalles de una sala específica.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la sala a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la sala.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idsalas:
 *                   type: integer
 */
router.get('/:id', roomCtrl.getById);

// POST /api/rooms
/**
 * @swagger
 * /rooms:
 *   post:
 *     summary: Crea una nueva sala
 *     description: Crea una nueva sala en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               capacity:
 *                 type: integer
 */
router.post('/', roomCtrl.create);

// PUT /api/rooms/:id
/**
 * @swagger
 * /rooms/{id}:
 *   put:
 *     summary: Actualiza una sala existente
 *     description: Actualiza los detalles de una sala específica.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la sala a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               capacity:
 *                 type: integer
 */
router.put('/:id', roomCtrl.update);

// DELETE /api/rooms/:id
/**
 * @swagger
 * /rooms/{id}:
 *   delete:
 *     summary: Elimina una sala
 *     description: Elimina una sala específica de la base de datos.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la sala a eliminar.
 *         schema:
 *           type: integer
 */
router.delete('/:id', roomCtrl.remove);

module.exports = router;
