require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const cors  = require("cors");

//Creamos el servidor
const app = express();

//Conexión a la DB
connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('Server is running on port');
});
