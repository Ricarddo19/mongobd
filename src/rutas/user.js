const express = require("express");
const userSchema = require("../models/user")
const ruta = express.Router();

// Create Usuario
ruta.post('/users', (req,res) => {
   const user =  userSchema(req.body);
   user
    .save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({ message: error }))
});

// get all Usuarios

ruta.get('/users', (req,res) => {
    userSchema
     .find()
     .then((data)=> res.json(data))
     .catch((error) => res.json({ message: error }))
 });

// get Usuario

ruta.get('/users/:id', (req,res) => {
    const { id } = req.params;
    userSchema
     .findById(id)
     .then((data)=> res.json(data))
     .catch((error) => res.json({ message: error }))
 });

 // update Usuario

ruta.put('/users/:id', (req,res) => {
    const { id } = req.params;
    const { nombre, fechaNacimiento} = req.body;
    userSchema
     .updateOne({ _id: id},{ $set: { nombre, fechaNacimiento}})
     .then((data)=> res.json(data))
     .catch((error) => res.json({ message: error }))
 });

  // delete Usuario

ruta.delete('/users/:id', (req,res) => {
    const { id } = req.params;
    userSchema
     .remove({ _id : id })
     .then((data)=> res.json(data))
     .catch((error) => res.json({ message: error }))
 });




module.exports = ruta;