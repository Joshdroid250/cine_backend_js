const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');

// Swagger documentation
/**
 * @swagger
 * /funcion:
 *   get:
 *     summary: Obtiene todas las funciones
 *     description: Devuelve una lista con todas las funciones.
 *     responses:
 *       200:
 *         description: Lista de funciones.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   idfuncion:
 *                     type: integer
 */

router.get('/', funcionController.getAll);

// GET /api/funcion/:id
/**
 * @swagger
 * /funcion/{id}:
 *   get:
 *     summary: Obtiene una función por ID
 *     description: Devuelve los detalles de una función específica.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la función a obtener.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la función.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 idfuncion:
 *                   type: integer
 */
router.get('/:id', funcionController.getById);

// POST /api/funcion
/**
 * @swagger
 * /funcion:
 *   post:
 *     summary: Crea una nueva función
 *     description: Crea una nueva función en la base de datos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idfuncion:
 *                 type: integer
 */

router.post('/', funcionController.create);

// PUT /api/funcion/:id
/**
 * @swagger
 * /funcion/{id}:
 *   put:
 *     summary: Actualiza una función existente
 *     description: Actualiza los detalles de una función específica.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la función a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               idfuncion:
 *                 type: integer
 */
router.put('/:id', funcionController.update);

// DELETE /api/funcion/:id
/**
 * @swagger
 * /funcion/{id}:
 *   delete:
 *     summary: Elimina una función
 *     description: Elimina una función específica de la base de datos.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID de la función a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Función eliminada.
 */
router.delete('/:id', funcionController.remove);

module.exports = router;
// Compare this snippet from routes/funcion.js: