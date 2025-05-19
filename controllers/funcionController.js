// controllers/funcionController.js
const funcionModel = require('../models/funcionModel');

const getAll = (req, res) => {
  funcionModel.getallFuncion((err, funciones) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(funciones);
  });
}

const getById = (req, res) => {
  funcionModel.getFuncionById(req.params.id, (err, funcion) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!funcion) return res.status(404).json({ message: 'Función no encontrada' });
    res.json(funcion);
  });
};

const create = (req, res) => {
  funcionModel.createFuncion(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      message: 'Función creada',
      id: result.insertId
    });
  });
};

const update = (req, res) => {
  funcionModel.updateFuncion(req.params.id, req.body
    , (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Función actualizada' });
  });
}

const remove = (req, res) => {
  funcionModel.deleteFuncion(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Función eliminada' });
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
// Compare this snippet from routes/funcion.js:
// routes/funcion.js