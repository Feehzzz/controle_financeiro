const routes = require('express').Router();
const UserController = require('./Controller/User.controller');


routes.post('/users', UserController.store )
module.exports = routes