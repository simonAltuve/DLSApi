const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { ErrorMiddleware, NotFoundMiddleware} = require('../middlewares')

module.exports = function ({ HomeRoutes,
    PruebaRoutes,
    UserRoutes,
    AuthRoutes,
    PacienteRoutes,
    AsistenciaRoutes}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    //default middlewares
    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

    //rutas por defecto
    apiRoutes.use('/home', HomeRoutes);
    apiRoutes.use('/prueba', PruebaRoutes);
    apiRoutes.use('/user',UserRoutes);
    apiRoutes.use('/auth',AuthRoutes);
    apiRoutes.use('/paciente', PacienteRoutes);
    apiRoutes.use('/asistencia', AsistenciaRoutes)


    router.use('/v1/apidls', apiRoutes);

    router.use(ErrorMiddleware);
    router.use(NotFoundMiddleware);


    return router;

}