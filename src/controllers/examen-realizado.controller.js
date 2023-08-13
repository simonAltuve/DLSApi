let _examenRealizadoService = null;

class ExamenRealizadoController{

    constructor({ ExamenRealizadoService }){
        _examenRealizadoService = ExamenRealizadoService;
    }

    async get( req, res){
        return true;
    }

    async getAll( req, res){
        return true;
    }

    async createExamenRealizado(req, res){
        
        const { asistenciaId, pruebaId } = req.params;
        const { body } = req;

        return res.send(await _examenRealizadoService.createExamenRealizado(asistenciaId, pruebaId, body));
    }

    async update( req, res){
        return true;
    }

    async delete( req, res){
        return true;
    }
}

module.exports = ExamenRealizadoController;