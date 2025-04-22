const roomsModel = require('../models/roomsModel');

const getAll = (req, res) => {
  roomsModel.getAllRooms((err, rooms) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rooms);
  });
}

const getById = (req, res) => {
  roomsModel.getRoomById(req.params.id, (err, room) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!room) return res.status(404).json({ message: 'Sala no encontrada' });
    res.json(room);
  });
}

const create = (req, res) => {
  roomsModel.createRoom(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: 'Sala creada',
      id: result.insertId
    });
  });
}   

const update = (req, res) => {
  roomsModel.updateRoom(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Sala actualizada' });
  });
}

const remove = (req, res) => {
  roomsModel.deleteRoom(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Sala eliminada' });
  });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
