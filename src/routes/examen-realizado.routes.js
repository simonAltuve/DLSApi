const {Router} = require('express');
const {AuthMiddleware} = require('../middlewares')

module.exports = function({ ExamenRealizadoController }){
    const router = Router();

    router.get("", AuthMiddleware, ExamenRealizadoController.getAll);
    router.get("/:examenRId", AuthMiddleware, ExamenRealizadoController.get);
    router.post("/:asistenciaId/:pruebaId", AuthMiddleware, ExamenRealizadoController.createExamenRealizado);
    router.patch("/:examenRId", AuthMiddleware, ExamenRealizadoController.update);
    router.delete("/:examenRId", AuthMiddleware, ExamenRealizadoController.delete);

    return router;
}