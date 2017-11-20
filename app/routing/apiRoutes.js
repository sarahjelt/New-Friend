var express = require("express");
var friends = require("../data/friends.js")
var Freunden = new friends();
var app = express();

app.get("/api/friends", function(req, res) {
//GET route
});


//need POST route
app.post("/api/friends", function(req, res) {
  var newFriend = req.body;
  //some other stuff
  Freunden.push(newFriend);
});