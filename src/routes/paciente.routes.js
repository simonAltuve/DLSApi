const {Router} = require('express');
const {AuthMiddleware} = require('../middlewares')

module.exports = function({PacienteController}){
    const router = Router();

    router.get("", AuthMiddleware, PacienteController.getAll);
    router.get("/:pacienteId", AuthMiddleware, PacienteController.get);
    router.post("", AuthMiddleware, PacienteController.create);
    router.patch("/:pacienteId", AuthMiddleware, PacienteController.update);
    router.delete("/:pacienteId", AuthMiddleware, PacienteController.delete);

    return router;
}