const db = require('../config/db');

// Obtener todas las salas
function getAllSeats(callback) {
  const sql = 'SELECT * FROM seats'; // Asegúrate de usar el nombre correcto de la tabla
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

// Obtener una sala por ID
function getSeatById(id, callback) {
  const sql = 'SELECT * FROM seats WHERE idseats = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
}

// Crear sala
function createSeat(seat, callback) {
  const { rowseats, columnseats, status, rooms_idrooms} = seat;
  const sql = `INSERT INTO seats 
    (rowseats, columnseats, status, rooms_idrooms)
    VALUES (?, ?, ?, ?)`;
  db.query(sql, [rowseats, columnseats, status, rooms_idrooms], callback);
}

// Actualizar sala
function updateSeat(id, seat, callback) {
  const { idrooms, row, column } = seat;
  const sql = `UPDATE seats
               SET rooms_idrooms = ?, rowseats = ?, columnseats = ?
               WHERE idseats = ?`;
  db.query(sql, [idrooms, row, column, id], callback);
}

// Eliminar sala
function deleteSeat(id, callback) {
  const sql = 'DELETE FROM seats WHERE idseats = ?';
  db.query(sql, [id], callback);
}

module.exports = {
  getAllSeats,
  getSeatById,
  createSeat,
  updateSeat,
  deleteSeat
};