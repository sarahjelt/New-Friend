var express = require("express");
var fs = require("fs");
var path = require("path");

var app = express();

module.exports = function(app) {

  app.get("/", function(req, res) {
    fs.readFile(__dirname + "/../public/home.html", function(err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    })
  });

  app.get("/survey", function(req, res) {
    fs.readFile(__dirname + "/../public/survey.html", function(err, data) {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(data);
    })
  });

};