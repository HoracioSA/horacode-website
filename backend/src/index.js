const express = require('express');
const routes = require('./routes');
const config =require('./config/config')

const app = express();
app.use(express.json());
app.use(routes);
app.config =config;
 app.listen(3333)
 module.exports= app;