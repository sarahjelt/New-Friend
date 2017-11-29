// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// EXPRESS
var app = express();
var PORT = process.env.PORT || 3000;

// set up Express data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ROUTING FILES
var api = require('./app/routing/apiRoutes.js')(app);
var routes = require('./app/routing/htmlRoutes.js')(app);

// SERVER LISTENER
app.listen(PORT, () => console.log(`listening on port ${PORT}`));