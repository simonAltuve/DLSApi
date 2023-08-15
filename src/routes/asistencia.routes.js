const {Router} = require('express');
const {AuthMiddleware} = require('../middlewares')

module.exports = function({AsistenciaController}){
    const router = Router();

    router.get("", AuthMiddleware, AsistenciaController.getAll);
    router.get("/:assistanceId", AuthMiddleware, AsistenciaController.get);
    router.post("/:patientId", AuthMiddleware, AsistenciaController.create);
    router.patch("/:assistanceId", AuthMiddleware, AsistenciaController.update);
    router.delete("/:assistanceId", AuthMiddleware, AsistenciaController.delete);

    return router;
}