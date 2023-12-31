const mongoose = require('mongoose');
const { Schema } = mongoose;

const AsistenciaSchema = new Schema({
    fecha: {type: Date, required: true},
    resultado: {type: String},
    descuento: {type: Number, default: 0},
    paciente:{
        type: Schema.Types.ObjectId,
        ref: "paciente",
        required: true,
        autopopulate: false
    },
    examenes:[{
        type: Schema.Types.ObjectId,
        ref: "examen-realizado",
        required: true,
        autopopulate: true
    }]
});

AsistenciaSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("asistencia", AsistenciaSchema);