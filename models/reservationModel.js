// models/reservationModel.js
const db = require('../config/db');

// 1. Obtener todas las reservaciones
function getAllReservations(callback) {
  const sql = 'SELECT * FROM cine_db.reservations';
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

// 2. Obtener una reservación por ID
function getReservationById(id, callback) {
  const sql = 'SELECT * FROM cine_db.reservations WHERE idreservations = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
}

// 3. Crear reservación
function createReservation(reservation, callback) {
  const { date, rooms_idrooms, users_iduser } = reservation;
  const sql = `INSERT INTO cine_db.reservations 
    (date, idfuncion, fila, columna, users_iduser)
    VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [date, rooms_idrooms, users_iduser], callback);
}

// 4. Actualizar reservación
function updateReservation(id, reservation, callback) {
  const { date, rooms_idrooms, users_iduser } = reservation;
  const sql = `UPDATE cine_db.reservations 
    SET date = ?, rooms_idrooms = ?, users_iduser = ?
    WHERE idreservations = ?`;
  db.query(sql, [date, rooms_idrooms, users_iduser, id], callback);
}

// 5. Eliminar reservación
function deleteReservation(id, callback) {
  const sql = 'DELETE FROM cine_db.reservations WHERE idreservations = ?';
  db.query(sql, [id], callback);
}

module.exports = {
  getAllReservations,
  getReservationById,
  createReservation,
  updateReservation,
  deleteReservation
};