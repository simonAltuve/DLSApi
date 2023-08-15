const {Router} = require('express');
const {AuthMiddleware} = require('../middlewares')

module.exports = function({PacienteController}){
    const router = Router();

    router.get("", AuthMiddleware, PacienteController.getAll);
    router.get("/:patientId", AuthMiddleware, PacienteController.get);
    router.post("", AuthMiddleware, PacienteController.create);
    router.patch("/:patientId", AuthMiddleware, PacienteController.update);
    router.delete("/:patientId", AuthMiddleware, PacienteController.delete);

    return router;
}