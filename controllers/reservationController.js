const reservationModel = require('../models/reservationModel');

const getAll = (req, res) => {
  reservationModel.getAllReservations((err, reservations) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(reservations);
  });
}

const getById = (req, res) => {
  reservationModel.getReservationById(req.params.id, (err, reservation) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!reservation) return res.status(404).json({ message: 'Reserva no encontrada' });
    res.json(reservation);
  });
};

const create = (req, res) => {
  reservationModel.createReservation(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: 'Reserva creada',
      id: result.insertId
    });
  });
};

const update = (req, res) => {
  reservationModel.updateReservation(req.params.id, req.body
    , (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Reserva actualizada' });
  });

}

const remove = (req, res) => {
  reservationModel.deleteReservation(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Reserva eliminada' });
  });
};


const getOccupiedSeats = (req, res) => {
  const { idfuncion } = req.params;

  if (!idfuncion) {
    return res.status(400).json({ error: 'Se requiere el ID de la función' });
  }

  reservationModel.getOccupiedSeatsByShow(idfuncion, (err, seats) => {
    if (err) {
      console.error('Error al obtener asientos ocupados:', err);
      return res.status(500).json({ error: 'Error del servidor' });
    }
    res.json({ occupiedSeats: seats });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getOccupiedSeats
};
// Compare this snippet from routes/reservations.js: