var express = require("express");
var friends = require("../data/friends.js").Freunden;
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // works with JSON input from user
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
      console.log(newFriend);
      friends.push(newFriend);
      res.json(newFriend);
    })
  };

