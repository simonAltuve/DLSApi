const BaseService = require('./base.service');
let _examenRealizadoRepository = null;
let _asistenciaRepository = null;
let _pruebaRepository = null;

class ExamenRealizadoService extends BaseService{
    constructor({
        ExamenRealizadoRepository,
        AsistenciaRepository,
        PruebaRepository}) {
        super(ExamenRealizadoRepository);
        _examenRealizadoRepository = ExamenRealizadoRepository;
        _asistenciaRepository = AsistenciaRepository;
        _pruebaRepository = PruebaRepository;
    }

    async createExamenRealizado( asistenciaId, pruebaId, body){

        if (!asistenciaId) {
            const error = new Error();
            error.status = 400;
            error.message = "asistenciaId must be sent";
            throw error;
        }

        const asistencia = await _asistenciaRepository.get(asistenciaId);

        if(!asistencia){
            const error = new Error();
            error.status = 400;
            error.message = "asistencia does not exist";
            throw error;
        }

        if (!pruebaId) {
            const error = new Error();
            error.status = 400;
            error.message = "pruebaId must be sent";
            throw error;
        }

        const prueba = await _pruebaRepository.get(pruebaId);

        if(!prueba){
            const error = new Error();
            error.status = 400;
            error.message = "prueba does not exist";
            throw error;
        }

        const createdExamenRealizado = await _examenRealizadoRepository.create({
            precio: body.precio,
            asistencia: asistenciaId,
            prueba: pruebaId
        });

        if(!asistencia.examenes){
            asistencia.examenes = [];
        }

        asistencia.examenes.push(createdExamenRealizado);

        const updatedAsistencia = await _asistenciaRepository.update(asistenciaId, {examenes: asistencia.examenes});

        if(!prueba.examenes){
            prueba.examenes = [];
        }

        prueba.examenes.push(createdExamenRealizado);

        const updatedPrueba = await _pruebaRepository.update(pruebaId, {examenes: prueba.examenes});

        return createdExamenRealizado;
    }
}

module.exports = ExamenRealizadoService;