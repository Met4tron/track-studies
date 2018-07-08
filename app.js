require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const routes = require('./routes');
const db = require('./models');

const app = express();

app.use('/api/v1', routes);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
