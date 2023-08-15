
let _pruebaService = null;

class PruebaController {

    constructor({ PruebaService }) {
        _pruebaService = PruebaService;
    }

    async get(req, res) {
        const { testId } = req.params;
        const prueba = await _pruebaService.get(testId);
        return res.send(prueba);
    }

    async getAll(req, res) {
        //const {pageSize, pageNum} = req.query;
        //pageSize, pageNum parametros del getAll
        const pruebas = await _pruebaService.getAll();
        return res.send(pruebas);
    }

    async create(req, res) {
        //en los comentarios abajo se obtiene el token del usuario
        const { body } = req;
        //const {id: userId} = req.user;
        const createdPrueba = await _pruebaService.create(body);
        return res.status(201).send(createdPrueba);
    }

    async update(req, res) {
        const { body } = req;
        const { testId } = req.params;
        const updatedPrueba = await _pruebaService.update(testId, body);

        return res.send(updatedPrueba);
    }

    async delete(req, res) {
        const { testId } = req.params;
        const deletedPrueba = await _pruebaService.delete(testId);
        return res.send(deletedPrueba);
    }

}

module.exports = PruebaController;