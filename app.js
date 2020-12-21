const express = require('express');
const app = express();

const routes = require('./routes/routes');

app.use('/produtos', routes);

module.exports = app;