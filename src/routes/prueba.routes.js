const { Router } = require('express');
const { AuthMiddleware } = require('../middlewares');


module.exports = function({PruebaController}){
    const router = Router();

    router.get('', AuthMiddleware, PruebaController.getAll);
    router.get('/:testId', AuthMiddleware, PruebaController.get);
    router.post('', AuthMiddleware, PruebaController.create);
    router.patch('/:testId', AuthMiddleware, PruebaController.update);
    router.delete('/:testId', AuthMiddleware, PruebaController.delete);

    return router;
}