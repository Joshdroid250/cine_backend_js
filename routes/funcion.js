const express = require('express');
const router = express.Router();
const funcionController = require('../controllers/funcionController');

/**
 * @swagger
 * tags:
 *   name: Funcion
 *   description: Gestión de funciones de cine
 */

/**
 * @swagger
 * /funcion:
 *   get:
 *     summary: Obtener todas las funciones
 *     tags: [Funcion]
 *     responses:
 *       200:
 *         description: Lista de funciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Funcion'
 */
router.get('/', funcionController.getAll);

/**
 * @swagger
 * /funcion/{id}:
 *   get:
 *     summary: Obtener una función por ID
 *     tags: [Funcion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la función
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Funcion'
 *       404:
 *         description: Función no encontrada
 */
router.get('/:id', funcionController.getById);

/**
 * @swagger
 * /funcion:
 *   post:
 *     summary: Crear una nueva función
 *     tags: [Funcion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FuncionInput'
 *     responses:
 *       201:
 *         description: Función creada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 */
router.post('/', funcionController.create);

/**
 * @swagger
 * /funcion/{id}:
 *   put:
 *     summary: Actualizar una función
 *     tags: [Funcion]
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
 *             $ref: '#/components/schemas/FuncionInput'
 *     responses:
 *       200:
 *         description: Función actualizada
 */
router.put('/:id', funcionController.update);

/**
 * @swagger
 * /funcion/{id}:
 *   delete:
 *     summary: Eliminar una función
 *     tags: [Funcion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Función eliminada
 */
router.delete('/:id', funcionController.remove);

/**
 * @swagger
 * components:
 *   schemas:
 *     Funcion:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         fecha:
 *           type: string
 *           format: date
 *         id_novie:
 *           type: integer
 *         hora:
 *           type: string
 *           format: time
 *         salas_idsalas:
 *           type: integer
 *     FuncionInput:
 *       type: object
 *       properties:
 *         fecha:
 *           type: string
 *           format: date
 *         id_novie:
 *           type: integer
 *         hora:
 *           type: string
 *           format: time
 *         salas_idsalas:
 *           type: integer
 *       required:
 *         - fecha
 *         - id_novie
 *         - hora
 *         - salas_idsalas
 */

module.exports = router;