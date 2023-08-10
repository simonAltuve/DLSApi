const { Router } = require('express');

module.exports = function({ LightController }){
    const router = Router();

    router.post('/', LightController.ProcessRoom);

    return router;
}