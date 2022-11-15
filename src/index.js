const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const rutasUsuario = require("./rutas/user");

const app  = express();
const port = process.env.PORT || 9000;

// middleware

app.use(express.json());
app.use('/api', rutasUsuario)

// RUTAS

// app.get('/',(req,res) => {
//     res.send("Bienvenido a mi API");
// });

// conexión mongodb
mongoose
    .connect(process.env.MONGOBD_URI)
    .then(()=> console.log("Conectando con MongoBD"))
    .catch((error) => console.error(error));



app.listen(port, ()=> console.log("servidor escuchando en el puerto ", port));