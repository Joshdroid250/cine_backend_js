const express = require('express');
const router = express.Router();
const roomCtrl = require('../controllers/roomsController');

// GET /api/rooms
router.get('/', roomCtrl.getAll);

// GET /api/rooms/:id
router.get('/:id', roomCtrl.getById);

// POST /api/rooms
router.post('/', roomCtrl.create);

// PUT /api/rooms/:id
router.put('/:id', roomCtrl.update);

// DELETE /api/rooms/:id
router.delete('/:id', roomCtrl.remove);

module.exports = router;
