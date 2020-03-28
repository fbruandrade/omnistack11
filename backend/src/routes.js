const express = require('express');

const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create)

// Routes for Ongs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

// Routes for Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

// Routes for Ong Incidents
routes.get('/profile', ProfileController.index);
module.exports = routes;