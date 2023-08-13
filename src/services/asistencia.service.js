const BaseService = require('./base.service');
let _asistenciaRepository = null;
let _pacienteRepository = null;

class AsistenciaService extends BaseService {

    constructor({ AsistenciaRepository, PacienteRepository }) {
        super(AsistenciaRepository);
        _asistenciaRepository = AsistenciaRepository;
        _pacienteRepository = PacienteRepository;
    }

    async createAsistencia(asistencia, pacienteId) {

        if (!pacienteId) {
            const error = new Error();
            error.status = 400;
            error.message = "pacienteId must be sent";
            throw error;
        }

        const paciente = await _pacienteRepository.get(pacienteId);
        if (!paciente) {
            const error = new Error();
            error.status = 404;
            error.message = "paciente does no exist";
            throw error;
        }

        const createdAsistencia = await _asistenciaRepository.create(
            { ...asistencia, paciente: pacienteId }
        );

        if(!paciente.asistencias){
            paciente.asistencias = [];
        }

        paciente.asistencias.push(createdAsistencia);
        
        return await _pacienteRepository.update(pacienteId, {asistencias: paciente.asistencias});
    }

}

module.exports = AsistenciaService;