const db = require('../config/db');

const getUserByEmail = (email, callback) => {
  const sql = 'SELECT * FROM users WHERE email = ?';
  db.query(sql, [email], (err, results) => {
    if (err) return callback(err);
    callback(null, results[0]);
  });
};

const createUser = ({ name, email, password, role }, callback) => {
  const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, password, role], (err, result) => {
    if (err) {
      console.error('Error en la base de datos:', err); // Agrega esto
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  getUserByEmail,
  createUser
};