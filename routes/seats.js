const express = require('express');
const router = express.Router();
const seatsController = require('../controllers/seatsController');

// GET /api/seats
router.get('/', seatsController.getAll);

// GET /api/seats/:id
router.get('/:id', seatsController.getById);

// POST /api/seats
router.post('/', seatsController.create);

// PUT /api/seats/:id
router.put('/:id', seatsController.update);

// DELETE /api/seats/:id
router.delete('/:id', seatsController.remove);

module.exports = router;
// Compare this snippet from routes/users.js: