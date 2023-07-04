const mongoose = require('mongoose');
const { Schema } = mongoose;

const PacienteSchema = new Schema({
    identificacion: {type: String, required: true},
    nombre_a: {type: String, required: true},
    nombre_b: {type: String},
    apellido_a: {type: String, required: true},
    apellido_b: {type: String},
    sexo: {type: String, enum:['Femenino','Masculino'], default: 'Femenino'},
    fecha_nacimiento: {type: Date},
    num_hijo: {type: Number},
    edad: {type: Number},
    correo: {type: String},
    telefono: {type: String}
});

module.exports = mongoose.model("paciente", PacienteSchema);