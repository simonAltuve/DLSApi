const BaseRepository = require('./base.repository');
let _prueba = null;

class PruebaRepository extends BaseRepository{

    constructor({ Prueba }){
        super(Prueba);
        _prueba = Prueba;
    }

}

module.exports = PruebaRepository;