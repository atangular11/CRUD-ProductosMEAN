const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

//creamos el servidor
const app = express();

//Conectamos a la BD
conectarDB();
app.use(cors())

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

//definimos ruta principal
//app.get('/', (req, res) => {
  //  res.send('Hola Mundo');
//})

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})