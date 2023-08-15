let _examenRealizadoService = null;

class ExamenRealizadoController{

    constructor({ ExamenRealizadoService }){
        _examenRealizadoService = ExamenRealizadoService;
    }

    async get( req, res){

        const { testperfId } = req.params;

        return res.send(await _examenRealizadoService.get(testperfId));
    }

    async getAll( req, res){
        
        return res.send(await _examenRealizadoService.getAll());
    }

    async createTestPerformed(req, res){
        
        const { assistanceId, testId } = req.params;
        const { body } = req;

        return res.send(await _examenRealizadoService.createTestPerformed(assistanceId, testId, body));
    }

    async update( req, res){

        const { testperfId } = req.params;
        const { body } = req;
        const updatedTestPerformed = await _examenRealizadoService.update(testperfId, body);

        return res.send(updatedTestPerformed);
    }

    async delete( req, res){
        
        const { testperfId } = req.params;
        const deletedTestPerformed = await _examenRealizadoService.delete(testperfId);
        return res.send(deletedTestPerformed);
    }
}

module.exports = ExamenRealizadoController;