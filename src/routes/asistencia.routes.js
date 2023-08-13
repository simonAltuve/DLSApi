const {Router} = require('express');
const {AuthMiddleware} = require('../middlewares')

module.exports = function({AsistenciaController}){
    const router = Router();

    router.get("", AuthMiddleware, AsistenciaController.getAll);
    router.get("/:asistenciaId", AuthMiddleware, AsistenciaController.get);
    router.post("/:pacienteId", AuthMiddleware, AsistenciaController.create);
    router.patch("/:asistenciaId", AuthMiddleware, AsistenciaController.update);
    router.delete("/:asistenciaId", AuthMiddleware, AsistenciaController.delete);

    return router;
}