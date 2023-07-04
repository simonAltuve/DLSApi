let _pacienteService = null;

class PacienteController{
    constructor({PacienteService}){
        _pacienteService = PacienteService;
    }

    async get(req, res){
        const { pacienteId } = req.params;
        const paciente = await _pacienteService.get(pacienteId);
        return res.send(paciente);
    }

    async getAll(req, res){
        const pacientes = await _pacienteService.getAll();
        return res.send(pacientes);
    }

    async create(req, res){
        const {body} = req;
        const createdPaciente =  await _pacienteService.create(body);
        return res.status(201).send(createdPaciente);
    }

    async update(req, res){
        const {pacienteId} = req.params;
        const {body} = req;
        const updatedPaciente = await _pacienteService.update(pacienteId, body);
        return res.send(updatedPaciente);
    }

    async delete(req, res) {
        const { pacienteId } = req.params;
        const deletedPaciente = await _pacienteService.delete(pacienteId);
        return res.send(deletedPaciente);
    }

}

module.exports = PacienteController;