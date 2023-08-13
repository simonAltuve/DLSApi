const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');
const { ErrorMiddleware, NotFoundMiddleware} = require('../middlewares');
const swaggerUI = require('swagger-ui-express');
const { SWAGGER_PATH } = require('../config');
const swaggerDocument = require(SWAGGER_PATH);

module.exports = function ({ HomeRoutes,
    PruebaRoutes,
    UserRoutes,
    AuthRoutes,
    PacienteRoutes,
    AsistenciaRoutes,
    LightRoutes,
    ExamenesRealizadosRoutes}) {
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
    apiRoutes.use('/lights', LightRoutes);
    apiRoutes.use('/examenesrealizados', ExamenesRealizadosRoutes)


    router.use('/v1/apisa', apiRoutes);
    router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

    router.use(ErrorMiddleware);
    router.use(NotFoundMiddleware);


    return router;

}