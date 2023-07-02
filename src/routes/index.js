const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');

module.exports = function ({ HomeRoutes,
    PruebaRoutes }) {
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

    router.use('/v1/apidls', apiRoutes);


    return router;

}