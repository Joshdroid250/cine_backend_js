const express = require('express');
const router = express.Router();
const roomCtrl = require('../controllers/roomsController');

/**
 * @swagger
 * tags:
 *   name: 
 *   description: Gestión de rooms de cine
 */

/**
 * @swagger
 * /rooms:
 *   get:
 *     summary: Obtener todas las rooms
 *     tags: [rooms]
 *     responses:
 *       200:
 *         description: Lista de todas las rooms
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sala'
 */
router.get('/', roomCtrl.getAll);

/**
 * @swagger
 * /rooms/{id}:
 *   get:
 *     summary: Obtener una sala por ID
 *     tags: [rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sala
 *     responses:
 *       200:
 *         description: Detalles de la sala
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sala'
 *       404:
 *         description: Sala no encontrada
 */
router.get('/:id', roomCtrl.getById);

/**
 * @swagger
 * /rooms:
 *   post:
 *     summary: Crear una nueva sala
 *     tags: [rooms]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalaInput'
 *     responses:
 *       201:
 *         description: Sala creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sala'
 *       400:
 *         description: Datos de entrada inválidos
 */
router.post('/', roomCtrl.create);

/**
 * @swagger
 * /rooms/{id}:
 *   put:
 *     summary: Actualizar una sala existente
 *     tags: [rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sala a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SalaInput'
 *     responses:
 *       200:
 *         description: Sala actualizada exitosamente
 *       404:
 *         description: Sala no encontrada
 */
router.put('/:id', roomCtrl.update);

/**
 * @swagger
 * /rooms/{id}:
 *   delete:
 *     summary: Eliminar una sala
 *     tags: [rooms]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la sala a eliminar
 *     responses:
 *       204:
 *         description: Sala eliminada exitosamente
 *       404:
 *         description: Sala no encontrada
 */
router.delete('/:id', roomCtrl.remove);

/**
 * @swagger
 * components:
 *   schemas:
 *     Sala:
 *       type: object
 *       properties:
 *         tdsales:
 *           type: integer
 *           example: 1
 *           description: ID único de la sala
 *         nombre:
 *           type: string
 *           example: "sala1"
 *           description: Nombre de la sala
 *         fila:
 *           type: integer
 *           example: 3
 *           description: Número de filas en la sala
 *         columnas:
 *           type: integer
 *           example: 4
 *           description: Número de columnas en la sala
 *       required:
 *         - nombre
 *         - fila
 *         - columnas
 * 
 *     SalaInput:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           example: "sala1"
 *         fila:
 *           type: integer
 *           example: 3
 *         columnas:
 *           type: integer
 *           example: 4
 *       required:
 *         - nombre
 *         - fila
 *         - columnas
 */

module.exports = router;