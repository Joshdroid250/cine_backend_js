// Modesl/roomsModel.js
const db = require('../config/db');

//Obtener todas las salas
function getAllRooms(callback) {
  const sql = 'SELECT * FROM rooms'; // Asegúrate de usar el nombre correcto de la tabla
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

// Obtener una sala por ID
function getRoomById(id, callback) {
  const sql = 'SELECT * FROM rooms WHERE idrooms = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
}

// Crear sala
function createRoom(room, callback) {
  const { name, capacity } = room;
  const sql = `INSERT INTO rooms 
    (name, capacity)
    VALUES (?, ?)`;
  db.query(sql, [name, capacity], callback);
}

// Actualizar sala
function updateRoom(id, room, callback) {
  const { name, capacity } = room;
  const sql = `UPDATE rooms
               SET name = ?, capacity = ?
               WHERE idrooms = ?`;
  db.query(sql, [name, capacity, id], callback);
}

// Eliminar sala
function deleteRoom(id, callback) {
  const sql = 'DELETE FROM rooms WHERE idrooms = ?';
  db.query(sql, [id], callback);
}

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};