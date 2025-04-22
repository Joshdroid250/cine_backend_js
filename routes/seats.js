const express = require('express');
const router = express.Router();
const seatsController = require('../controllers/seatsController');

// GET /api/seats
/**
 * @swagger
 * /seats:
 *   get:
 *     summary: Obtiene todos los asientos
 *     description: Devuelve una lista con todos los asientos disponibles.
 *     responses:
 *       200:
 *         description: Lista de asientos.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idseats:
 *                     type: integer
 *                   row:
 *                     type: string
 *                   column:
 *                     type: string
 *                   status:
 *                     type: string
 *                   rooms_idrooms:
 *                     type: integer
 *       500:
 *         description: Error al obtener los asientos.
 */

router.get('/', seatsController.getAll);

// GET /api/seats/:id
/**
 * @swagger
 * /seats/{id}:
 *   get:
 *     summary: Obtiene un asiento por ID
 *     description: Devuelve los detalles de un asiento específico.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID del asiento a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles del asiento.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idseats:
 *                   type: integer
 *                 rowseats:
 *                   type: string
 *                 columnseats:
 *                   type: string
 *                 status:
 *                   type: string
 *                 rooms_idrooms:
 *                   type: integer
 *       404:
 *         description: Asiento no encontrado.
 */

router.get('/:id', seatsController.getById);

// POST /api/seats
router.post('/', seatsController.create);

// PUT /api/seats/:id
router.put('/:id', seatsController.update);

// DELETE /api/seats/:id
router.delete('/:id', seatsController.remove);

module.exports = router;