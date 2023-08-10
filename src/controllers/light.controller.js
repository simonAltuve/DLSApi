let _lightService = null;

class LightController{

    constructor({ LightService }){
        _lightService = LightService;
    }

    async ProcessRoom(req, res){
        const { room } = req.body;
        const result = await _lightService.ProcessRoom(room)
        return res.send(result);
    }
}

module.exports = LightController;