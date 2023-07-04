const BaseService = require('./base.service');
let _asistenciaRepository = null;

class AsistenciaService extends BaseService{
    constructor({ AsistenciaRepository }) {
        super(AsistenciaRepository);
        _asistenciaRepository = AsistenciaRepository;
    }
}

module.exports = AsistenciaService;