const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movieController');

/**
 * @swagger
 * tags:
 *   name: Películas
 *   description: Gestión de películas del cine
 */

/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Obtener todas las películas
 *     tags: [Películas]
 *     responses:
 *       200:
 *         description: Lista de todas las películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *       500:
 *         description: Error del servidor
 */
router.get('/', movieCtrl.getAll);

/**
 * @swagger
 * /movies/{id}:
 *   get:
 *     summary: Obtener una película por ID
 *     tags: [Películas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película
 *     responses:
 *       200:
 *         description: Detalles de la película
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', movieCtrl.getById);

/**
 * @swagger
 * /movies:
 *   post:
 *     summary: Crear una nueva película
 *     tags: [Películas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       201:
 *         description: Película creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error del servidor
 */
router.post('/', movieCtrl.create);

/**
 * @swagger
 * /movies/{id}:
 *   put:
 *     summary: Actualizar una película existente
 *     tags: [Películas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MovieInput'
 *     responses:
 *       200:
 *         description: Película actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Movie'
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error del servidor
 */
router.put('/:id', movieCtrl.update);

/**
 * @swagger
 * /movies/{id}:
 *   delete:
 *     summary: Eliminar una película
 *     tags: [Películas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la película a eliminar
 *     responses:
 *       204:
 *         description: Película eliminada exitosamente
 *       404:
 *         description: Película no encontrada
 *       500:
 *         description: Error del servidor
 */
router.delete('/:id', movieCtrl.remove);

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         idmovie:
 *           type: integer
 *           example: 1
 *           description: ID único de la película
 *         titulo:
 *           type: string
 *           example: "Minecraft"
 *           description: Título de la película
 *         duration:
 *           type: string
 *           format: time
 *           example: "00:00:02"
 *           description: Duración en formato HH:MM:SS
 *         description:
 *           type: string
 *           example: "minecraft"
 *           description: Descripción de la película
 *         genre:
 *           type: string
 *           example: "terror"
 *           description: Género cinematográfico
 *         posterImage:
 *           type: integer
 *           example: 1
 *           description: ID o referencia a la imagen del póster
 *       required:
 *         - titulo
 *         - duration
 *         - genre
 * 
 *     MovieInput:
 *       type: object
 *       properties:
 *         titulo:
 *           type: string
 *           example: "Minecraft"
 *         duration:
 *           type: string
 *           format: time
 *           example: "00:00:02"
 *         description:
 *           type: string
 *           example: "minecraft"
 *         genre:
 *           type: string
 *           example: "terror"
 *         posterImage:
 *           type: integer
 *           example: 1
 *       required:
 *         - titulo
 *         - duration
 *         - genre
 */

module.exports = router;