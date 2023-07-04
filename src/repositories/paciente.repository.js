const BaseRepository = require('./base.repository');
let _paciente = null;

class PacienteRepository extends BaseRepository{

    constructor({ Paciente }){
        super(Paciente);
        _paciente = Paciente;
    }

}

module.exports = PacienteRepository;