
let _asistenciaService = null;

class AsistenciaController {

    constructor({ AsistenciaService }) {
        _asistenciaService = AsistenciaService;
    }

    async get(req, res) {
        const { asistenciaId } = req.params;
        const asistencia = await _asistenciaService.get(asistenciaId);
        return res.send(asistencia);
    }

    async getAll(req, res) {
        //const {pageSize, pageNum} = req.query;
        //pageSize, pageNum parametros del getAll
        const asistencias = await _asistenciaService.getAll();
        return res.send(asistencias);
    }

    async create(req, res) {
        const { body } = req;
        const { pacienteId } = req.params;
        //const {id: userId} = req.user;
        const createdAsistencia = await _asistenciaService.createAsistencia(body, pacienteId);

        return res.status(201).send(createdAsistencia);
    }

    async update(req, res) {
        const { body } = req;
        const { asistenciaId } = req.params;
        const updatedAsistencia = await _asistenciaService.update(asistenciaId, body);

        return res.send(updatedAsistencia);
    }

    async delete(req, res) {
        const { asistenciaId } = req.params;
        const deletedAsistencia = await _asistenciaService.delete(asistenciaId);
        return res.send(deletedAsistencia);
    }

}

module.exports = AsistenciaController;