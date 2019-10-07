const routes = require('express').Router();
const UserController = require('./Controller/User.controller');
const AuthorizationController = require('./Controller/Authorization.controller');
const TransationController = require('./Controller/Transation.controller');

routes.post('/users', UserController.register);
routes.get('/users', AuthorizationController, UserController.show);
routes.post('/auth', UserController.auth);

routes.get('/transation', AuthorizationController, TransationController.index)
routes.post('/transation', AuthorizationController, TransationController.store)

module.exports = routes