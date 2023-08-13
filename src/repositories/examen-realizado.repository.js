const BaseRepository = require('./base.repository');
let _examenRealizado = null;

class ExamenRealizadoRepository extends BaseRepository{

    constructor({ ExamenRealizado }){
        super(ExamenRealizado);
        _examenRealizado = ExamenRealizado;
    }

}

module.exports = ExamenRealizadoRepository;