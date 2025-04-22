// models/movieModel.js
const db = require('../config/db');

// 1. Obtener todas las películas
function getAllMovies(callback) {
  const sql = 'SELECT * FROM movie';   // Asegúrate de usar el nombre correcto de la tabla
  db.query(sql, (err, results) => {
    if (err) return callback(err, null);
    callback(null, results);
  });
}

// 2. Obtener una película por ID
function getMovieById(id, callback) {
  const sql = 'SELECT * FROM movie WHERE idmovie = ?';
  db.query(sql, [id], (err, results) => {
    if (err) return callback(err, null);
    callback(null, results[0]);
  });
}

// 3. Crear película
function createMovie(movie, callback) {
  const { titulo, duration, description, genre, posterImage } = movie;
  const sql = `INSERT INTO movie 
    (titulo, duration, description, genre, posterImage)
    VALUES (?, ?, ?, ?, ?)`;
  db.query(sql, [titulo, duration, description, genre, posterImage], callback);
}

// 4. Actualizar película
function updateMovie(id, movie, callback) {
  const { titulo, duration, description, genre, posterImage } = movie;
  const sql = `UPDATE movie
               SET titulo = ?, duration = ?, description = ?, genre = ?, posterImage = ?
               WHERE idmovie = ?`;
  db.query(sql, [titulo, duration, description, genre, posterImage, id], callback);
}

// 5. Eliminar película
function deleteMovie(id, callback) {
  const sql = 'DELETE FROM movie WHERE idmovie = ?';
  db.query(sql, [id], callback);
}

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};
