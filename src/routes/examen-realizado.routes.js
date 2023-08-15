const {Router} = require('express');
const {AuthMiddleware} = require('../middlewares')

module.exports = function({ ExamenRealizadoController }){
    const router = Router();

    router.get("", AuthMiddleware, ExamenRealizadoController.getAll);
    router.get("/:testperfId", AuthMiddleware, ExamenRealizadoController.get);
    router.post("/:assistanceId/:testId", AuthMiddleware, ExamenRealizadoController.createTestPerformed);
    router.patch("/:testperfId", AuthMiddleware, ExamenRealizadoController.update);
    router.delete("/:testperfId", AuthMiddleware, ExamenRealizadoController.delete);

    return router;
}