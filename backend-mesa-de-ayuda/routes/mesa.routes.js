const express = require('express');
const router = express.Router();
const mesaControllers = require('../controllers/mesaControllers.js');

router
    .post('/enviar-ticket', mesaControllers.enviarTicket)
    .get('/obtener-tickets', mesaControllers.obtenerSolicitudes)
    .post('/enviar-solucion', mesaControllers.enviarSolucion)


module.exports = router;