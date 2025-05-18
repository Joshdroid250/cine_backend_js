// Modesl/roomsModel.js
const db = require('../config/db');

//Obtener todas las salas
function getAllRooms(callback) {
  const sql = 'SELECT * FROM salas'; // Asegúrate de usar el nombre correcto de la tabla
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

// Obtener una sala por ID
function getRoomById(id, callback) {
  const sql = 'SELECT * FROM salas WHERE idsalas = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
}

// Crear sala
function createRoom(room, callback) {
  const { name, capacity } = room;
  const sql = `INSERT INTO salas 
    (nombre, fila, columnas)
    VALUES (?, ?, ?)`;
  // Asegúrate de que los nombres de las columnas coincidan con tu base de datos
  db.query(sql, [name, capacity], callback);
}

// Actualizar sala
function updateRoom(id, room, callback) {
  const { name, capacity } = room;
  const sql = `UPDATE salas
               SET nombre = ?, fila = ?, columnas = ?
               WHERE idsalas = ?`;
  db.query(sql, [name, capacity, id], callback);
}

// Eliminar sala
function deleteRoom(id, callback) {
  const sql = 'DELETE FROM salas WHERE idsalas = ?';
  db.query(sql, [id], callback);
}

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom
};