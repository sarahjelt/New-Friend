//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//EXPRESS
var app = express();
var routes = require('./app/routing/htmlRoutes.js')(app);
var api = require('./app/routing/apiRoutes.js')(app);

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DATA

//SERVER LISTENER
app.listen(PORT, () => console.log(`listening on port ${PORT}`));