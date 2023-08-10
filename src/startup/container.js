const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('.');

//services
const { HomeService,
        PruebaService,
        UserService,
        AuthService,
        PacienteService,
        AsistenciService,
        LightService } = require('../services');

//controllers
const { HomeController,
        PruebaController,
        UserController,
        AuthController,
        PacienteController,
        AsistenciaController,
        LightController } = require('../controllers');

//routes
const { HomeRoutes,
        PruebaRoutes,
        UserRoutes,
        AuthRoutes,
        PacienteRoutes,
        AsistenciaRoutes,
        LightRoutes } = require('../routes/index.routes')
const Routes = require('../routes');

//models
const { Prueba,
        User,
        Paciente,
        Asistencia } = require('../models');

//Repositories
const { PruebaRepository,
        UserRepository,
        PacienteRepository,
        AsistenciaRepository } = require('../repositories');

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
        AuthService: asClass(AuthService).singleton(),
        PacienteService: asClass(PacienteService).singleton(),
        AsistenciaService: asClass(AsistenciService).singleton(),
        LightService: asClass(LightService).singleton()
    })
    .register({
        //esto se hace para que el scope se mantenga porque cambia cuando express
        //llama a un controlador
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        PruebaController: asClass(PruebaController.bind(PruebaController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        AuthController: asClass(AuthController.bind(AuthController)).singleton(),
        PacienteController: asClass(PacienteController.bind(PacienteController)).singleton(),
        AsistenciaController: asClass(AsistenciaController.bind(AsistenciaController)).singleton(),
        LightController: asClass(LightController.bind(LightController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        PruebaRoutes: asFunction(PruebaRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        AuthRoutes: asFunction(AuthRoutes).singleton(),
        PacienteRoutes: asFunction(PacienteRoutes).singleton(),
        AsistenciaRoutes: asFunction(AsistenciaRoutes).singleton(),
        LightRoutes: asFunction(LightRoutes).singleton()
    })
    .register({
        Prueba: asValue(Prueba),
        User: asValue(User),
        Paciente: asValue(Paciente),
        Asistencia: asValue(Asistencia)
    })
    .register({
        PruebaRepository: asClass(PruebaRepository).singleton(),
        UserRepository: asClass(UserRepository).singleton(),
        PacienteRepository: asClass(PacienteRepository).singleton(),
        AsistenciaRepository: asClass(AsistenciaRepository).singleton()
    });

module.exports = container;