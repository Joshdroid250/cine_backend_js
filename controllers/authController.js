const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');
const config = require('../config/jwt');

const login = (req, res) => {
  const { email, password } = req.body;

  userModel.getUserByEmail(email, (err, user) => {
    if (err) return res.status(500).json({ message: 'Error en el servidor' });
    if (!user) return res.status(401).json({ message: 'Usuario no encontrado' });

    // Comparar contraseñas
    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if (!passwordIsValid) return res.status(401).json({ message: 'Contraseña incorrecta' });

    // Generar token JWT
    const token = jwt.sign(
      { id: user.iduser, email: user.email, role: user.role },
      config.secret,
      { expiresIn: config.expiresIn }
    );

    // Retornar el token
    res.status(200).json({
      message: 'Login exitoso',
      token: token
    });
  });
};

const register = (req, res) => {
    const { name, email, password, role } = req.body;
  
    // Validación rápida
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }
  
    // Encriptar contraseña
    const hashedPassword = bcrypt.hashSync(password, 8);
  
    userModel.createUser({ name, email, password: hashedPassword, role }, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'El email ya está registrado' });
        }
        return res.status(500).json({ message: 'Error al registrar usuario' });
      }
  
      res.status(201).json({ message: 'Usuario registrado exitosamente' });
    });
  };
  
  module.exports = {
    login,
    register
  };
  





// En este código, se ha añadido la función `login` que maneja la autenticación de usuarios.