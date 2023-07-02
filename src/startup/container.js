const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('.');

//services
const { HomeService,
        PruebaService } = require('../services');

//controllers
const { HomeController,
        PruebaController } = require('../controllers');

//routes
const { HomeRoutes,
    PruebaRoutes } = require('../routes/index.routes')
const Routes = require('../routes');

//models
const { Prueba } = require('../models');

//Repositories
const { PruebaRepository } = require('../repositories');

const container = new createContainer();

container
    .register({
        app: asClass(app).singleton(),
        config: asValue(config),
        router: asFunction(Routes).singleton()
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        PruebaService: asClass(PruebaService).singleton()
    })
    .register({
        //esto se hace para que el scope se mantenga porque cambia cuando express
        //llama a un controlador
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        PruebaController: asClass(PruebaController.bind(PruebaController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        PruebaRoutes: asFunction(PruebaRoutes).singleton()
    })
    .register({
        Prueba: asValue(Prueba)
    })
    .register({
        PruebaRepository: asClass(PruebaRepository).singleton()
    });

module.exports = container;