const BaseService = require('./base.service');
let _pruebaRepository = null;

class PruebaService extends BaseService{
    constructor({ PruebaRepository }) {
        super(PruebaRepository);
        _pruebaRepository = PruebaRepository;
    }
}

module.exports = PruebaService;