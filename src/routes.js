const express = require('express');

const routes = express.Router();
const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

//rota annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

//rota de prioridades
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

//rota de Content
routes.post('/content/:id', ContentController.update);

module.exports = routes;