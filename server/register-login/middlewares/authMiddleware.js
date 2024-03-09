const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = async (req, res, next) => {
  // Obtener el token del encabezado de autorización
  const token = req.header('Authorization');

  // Verificar si no se proporcionó el token
  if (!token) {
    return res.status(401).json({ message: 'Acceso no autorizado. Token no proporcionado.' });
  }

  try {
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Obtener el usuario asociado al token
    const user = await User.findById(decoded.userId);

    // Verificar si el usuario existe
    if (!user) {
      return res.status(401).json({ message: 'Acceso no autorizado. Usuario no encontrado.' });
    }

    // Adjuntar el usuario al objeto de solicitud para su uso posterior
    req.user = user;

    // Continuar con la ejecución del siguiente middleware o ruta
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Acceso no autorizado. Token inválido.' });
  }
};

module.exports = authMiddleware;
