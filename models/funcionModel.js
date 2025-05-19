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
function createFuncion(funcion, callback) {
  const { fecha, id_movie, hora, salas_idsalas} = funcion;
  const sql = 'INSERT INTO funcion (fecha, id_movie, hora, salas_idsalas) VALUES (?, ?, ?, ?)';
  db.query(sql, [fecha, id_movie, hora, salas_idsalas], callback);
}

// Actualizar sala
function updateFuncion(id, seat, callback) {
  const {fecha, id_movie, hora, salas_idsalas } = seat;
  const sql = 'UPDATE funcion SET id_movie = ?, fecha = ?, hora = ?, salas_idsalas = ? WHERE id = ?';
  db.query(sql, [fecha, id_movie, hora, salas_idsalas], callback);
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