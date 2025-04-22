const movieModel = require('../models/movieModel');

const getAll = (req, res) => {
  movieModel.getAllMovies((err, movies) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(movies);
  });
};

const getById = (req, res) => {
  movieModel.getMovieById(req.params.id, (err, movie) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!movie) return res.status(404).json({ message: 'Película no encontrada' });
    res.json(movie);
  });
};

const create = (req, res) => {
  movieModel.createMovie(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: 'Película creada',
      id: result.insertId
    });
  });
};

const update = (req, res) => {
  movieModel.updateMovie(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Película actualizada' });
  });
};

const remove = (req, res) => {
  movieModel.deleteMovie(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Película eliminada' });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
