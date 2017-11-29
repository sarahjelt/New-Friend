// DEPENDENCIES
var express = require("express");
var friends = require("../data/friends.js").Freunden;
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");

// EXPRESS
var app = express();

// set up Express data parsing
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

module.exports = function(app) {
  // 
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  // takes JSON input from user and runs match program, then returns photo and name of match
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
      console.log(newFriend);
      friends.push(newFriend);

      // match function
      // converts scores from array of strings to array of numbers
      var nooFriend = newFriend.scores.map(Number);
      var totals = [];

      // loops through all friends in API, and compares each answer number to the corresponding answer of the current user
      for (var i = 0; i < friends.length; i++) {
        var oldFriends = friends[i].scores;
        var difference = [];

        // pushes absolute value of difference between corresponding answers to difference array
        for (var j = 0; j < nooFriend.length; j++) {
          difference.push(Math.abs(nooFriend[j] - oldFriends[j]));
        }

        // console.log(difference);
        // finds total difference between current user and each of the friends
        var totalDifference = difference.reduce((a, b) => a + b, 0);
        totals.push(totalDifference);
      };

      // remove current user from totals array (totals only includes totalDifferences of previously submitted friends, so you can't get matched with yourself)
      totals.pop();

      // index of match = smallest number in totals array (smallest totalDifference in answers)
      var match = totals.indexOf(totals.reduce((a, b) => Math.min(a, b)));

      var BFF = friends[match].name;
      var BFFimg = friends[match].photo;
      console.log(`${BFF} is your match!`);

      //sends match
      res.json(friends[match]);
    })
  };

