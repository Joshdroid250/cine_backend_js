const express = require('express');
const router = express.Router();
const movieCtrl = require('../controllers/movieController');

// GET /api/movies
router.get('/', movieCtrl.getAll);

// GET /api/movies/:id
router.get('/:id', movieCtrl.getById);

// POST /api/movies
router.post('/', movieCtrl.create);

// PUT /api/movies/:id
router.put('/:id', movieCtrl.update);

// DELETE /api/movies/:id
router.delete('/:id', movieCtrl.remove);

module.exports = router;
