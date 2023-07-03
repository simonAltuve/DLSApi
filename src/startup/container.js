const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('.');

//services
const { HomeService,
        PruebaService,
        UserService,
        AuthService } = require('../services');

//controllers
const { HomeController,
        PruebaController,
        UserController,
        AuthController } = require('../controllers');

//routes
const { HomeRoutes,
        PruebaRoutes,
        UserRoutes,
        AuthRoutes } = require('../routes/index.routes')
const Routes = require('../routes');

//models
const { Prueba,
        User } = require('../models');

//Repositories
const { PruebaRepository,
        UserRepository } = require('../repositories');

const container = new createContainer();

container
    .register({
        app: asClass(app).singleton(),
        config: asValue(config),
        router: asFunction(Routes).singleton()
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        PruebaService: asClass(PruebaService).singleton(),
        UserService: asClass(UserService).singleton(),
        AuthService: asClass(AuthService).singleton()
    })
    .register({
        //esto se hace para que el scope se mantenga porque cambia cuando express
        //llama a un controlador
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        PruebaController: asClass(PruebaController.bind(PruebaController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        PruebaRoutes: asFunction(PruebaRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton()
    })
    .register({
        Prueba: asValue(Prueba),
        User: asValue(User)
    })
    .register({
        PruebaRepository: asClass(PruebaRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton()
    });

module.exports = container;