const BaseRepository = require('./base.repository');
let _asistencia = null;

class AsistenciaRepository extends BaseRepository{

    constructor({Asistencia}){
        super(Asistencia);
        _asistencia = Asistencia;
    }

}

module.exports = AsistenciaRepository;