const Contact = require('../models/contactModel');

exports.submitForm = async (req, res) => {
  try {
    const nuevoContacto = new Contact(req.body);
    await nuevoContacto.save();
    res.status(201).json({ mensaje: 'Formulario de contacto enviado con éxito' });
  } catch (error) {
    console.error('Error al procesar el formulario de contacto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.getContacts = async (req, res) => {
  try {
    const contactos = await Contact.find();
    res.json(contactos);
  } catch (error) {
    console.error('Error al obtener los contactos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
