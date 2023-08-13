const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExamenRealizadoSchema = new Schema({
    precio: {type: Number},
    asistencia:{
        type: Schema.Types.ObjectId,
        ref: "asistencia",
        required: true,
        autopopulate: true
    },
    prueba:{
        type: Schema.Types.ObjectId,
        ref: "prueba",
        required: true,
        autopopulate: true
    }
});

module.exports = mongoose.model("examen-realizado", ExamenRealizadoSchema);