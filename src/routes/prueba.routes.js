const { Router } = require('express');
const { AuthMiddleware, ErrorMiddleware } = require('../middlewares');


module.exports = function({PruebaController}){
    const router = Router();

    router.get('', AuthMiddleware, PruebaController.getAll);
    router.get('/:pruebaId', [AuthMiddleware, ErrorMiddleware], PruebaController.get);
    router.post('', AuthMiddleware, PruebaController.create);
    router.patch('/:pruebaId', AuthMiddleware, PruebaController.update);
    router.delete('/:pruebaId', AuthMiddleware, PruebaController.delete);

    return router;
}