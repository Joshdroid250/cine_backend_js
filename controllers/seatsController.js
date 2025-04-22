// controllers/seatsController.js
const seatsModel = require('../models/seatsModel');

const getAll = (req, res) => {
  seatsModel.getAllSeats((err, seats) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(seats);
  });
};

const getById = (req, res) => {
  seatsModel.getSeatById(req.params.id, (err, seat) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!seat) return res.status(404).json({ message: 'Asiento no encontrado' });
    res.json(seat);
  });
};

const create = (req, res) => {
  seatsModel.createSeat(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: 'Asiento creado',
      id: result.insertId
    });
  });
};

const update = (req, res) => {
  seatsModel.updateSeat(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Asiento actualizado' });
  });
};

const remove = (req, res) => {
  seatsModel.deleteSeat(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Asiento eliminado' });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
