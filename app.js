require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(logger('dev'));
app.use('/api/v1', routes);

module.exports = app;
