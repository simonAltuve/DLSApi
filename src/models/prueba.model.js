const mongoose = require('mongoose');
const { Schema } = mongoose;

const PruebaSchema = new Schema({
    nombre: {type: String, required: true},
    costo: {type: Number},
    precio: {type: Number},
    tiempo_entrega: {type: String},
    muestra: {type: String},
    examenes:[{
        type: Schema.Types.ObjectId,
        ref: "examen-realizado",
        required: true,
        autopopulate: false
    }]
});

module.exports = mongoose.model("prueba", PruebaSchema);