const db = require('../config/db');

// Obtener todas las salas
function getallFuncion(callback) {
  const sql = 'SELECT * FROM funcion'; // Asegúrate de usar el nombre correcto de la tabla
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

// Obtener una sala por ID
function getFuncionById(id, callback) {
  const sql = 'SELECT * FROM funcion WHERE id = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
}

// Crear sala
function createFuncion(seat, callback) {
  const { rowseats, columnseats, status, rooms_idrooms} = seat;
  const sql = `INSERT INTO funcion (fecha, id_novie, hora, salas_idsalas) VALUES (?, ?, ?, ?)`;
  db.query(sql, [rowseats, columnseats, status, rooms_idrooms], callback);
}

// Actualizar sala
function updateFuncion(id, seat, callback) {
  const { idrooms, row, column } = seat;
  const sql = `UPDATE funcion
               SET id_movie = ?, fecha = ?, hora = ?, salas_idsalas = ? WHERE id = ?`;
  db.query(sql, [idrooms, row, column, id], callback);
}

// Eliminar sala
function deleteFuncion(id, callback) {
  const sql = 'DELETE FROM funcion WHERE id = ?';
  db.query(sql, [id], callback);
}

module.exports = {
  getallFuncion,
  getFuncionById,
  createFuncion,
  updateFuncion,
  deleteFuncion
};