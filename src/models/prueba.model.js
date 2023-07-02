const mongoose = require('mongoose');
const { Schema } = mongoose;

const PruebaSchema = new Schema({
    nombre: {type: String, required: true},
    costo: {type: Number},
    precio: {type: Number},
    tiempo_entrega: {type: String},
    muestra: {type: String}
});

module.exports = mongoose.model("prueba", PruebaSchema);