//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//EXPRESS
var app = express();


var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DATA

//SERVER LISTENER
app.listener(PORT);