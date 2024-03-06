require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors  = require("cors");

//Creamos el servidor
const app = express();

//Conexión a la DB
connectDB();
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('Server is running on port');
});
