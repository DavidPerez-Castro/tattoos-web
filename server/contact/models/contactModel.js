const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  matter: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Contacto = mongoose.model('Contact', contactoSchema);

module.exports = Contacto;
