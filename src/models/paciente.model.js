const mongoose = require('mongoose');
const { Schema } = mongoose;

const PacienteSchema = new Schema({
    identificacion: {type: String, required: true},
    nombre1: {type: String, required: true},
    nombre2: {type: String},
    apellido1: {type: String, required: true},
    apellido2: {type: String},
    sexo: {type: String, enum:['Femenino','Masculino'], default: 'Femenino'},
    fecha_nacimiento: {type: Date},
    num_hijo: {type: Number},
    edad: {type: Number},
    correo: {type: String},
    telefono: {type: String},
    asistencias:[{
        type: Schema.Types.ObjectId,
        ref: "asistencia",
        required: true,
        autopopulate: false
    }]
});

PacienteSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("paciente", PacienteSchema);