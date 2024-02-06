require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/tatuajes', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(error => {
    console.error('Error al conectar a la base de datos:', error);
  });

const db = mongoose.connection;
db.on('error', err => {
  console.error('Error de conexión a la base de datos:', err);
});
db.on('connected', () => {
  console.log('Conectado a la base de datos');
});
db.on('disconnected', () => {
  console.log('Desconectado de la base de datos');
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
