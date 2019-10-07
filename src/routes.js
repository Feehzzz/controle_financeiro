const routes = require('express').Router();
const UserController = require('./Controller/User.controller');


routes.post('/users', UserController.register);
routes.post('/auth', UserController.auth);

module.exports = routes