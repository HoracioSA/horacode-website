"use strict";

const express = require('express');

const UserController = require('./controllers/UserController');

const PostController = require('./controllers/PostController');

const LoginController = require('./controllers/LoginController');

const ForgotPassword = require('./controllers/ForgotPassword');

const ResetPassword = require('./controllers/ResetPassword');

const routes = express.Router();
routes.post('/register', UserController.store);
routes.get('/users', UserController.index);
routes.post('/login', LoginController.sotore);
routes.post('/forgot', ForgotPassword.store);
routes.get('/reset', ResetPassword.check);
routes.post('/reset', ResetPassword.update);
routes.post('/posts', PostController.create);
routes.get('/posts', PostController.index);
routes.delete('/posts/:id', PostController.delete);
module.exports = routes;