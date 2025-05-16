const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'mysql.railway.internal',
  user: 'root',
  password: 'lLwudoWrWkumLuZhEgFNsJsLhDCqQhXe',
  database: 'railway'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

module.exports = connection;
