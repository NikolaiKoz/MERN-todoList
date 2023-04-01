const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // carga las variables de entorno del archivo .env

const app = express();
const port = process.env.PORT || 5000; // define el puerto de escucha de la aplicación

// middleware
app.use(cors());
app.use(express.json());

// conexión a la base de datos MongoDB
// const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('Conexión exitosa con la base de datos');
// });

// definición de rutas de la API
// const tareasRouter = require('./routes/tareas');
// app.use('/tareas', tareasRouter);

// inicio del servidor
app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto: ${port}`);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola desde el servidor de backend! asdasdasda' })
})
