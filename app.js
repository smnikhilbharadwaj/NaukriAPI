/**
 * Module dependencies.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

/**
 * Import Routes Object.
 */
var routes = require('./routes/routes');

/**
 * Register Body Parser for parsing Request Body.
 */
app.use(bodyParser.json());

/**
 * CORS Filter for accessing API from Front-End
 */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * Register all the routes
 */
app.use('/', routes);

/**
 * Export App Object.
 */
module.exports = app;