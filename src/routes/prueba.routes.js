const { Router } = require('express');


module.exports = function({PruebaController}){
    const router = Router();

    router.get('', PruebaController.getAll);
    router.get('/:pruebaId', PruebaController.get);
    router.post('', PruebaController.create);
    router.patch('/:pruebaId', PruebaController.update);
    router.delete('/:pruebaId', PruebaController.delete);

    return router;
}