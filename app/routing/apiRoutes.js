var express = require("express");
var friends = require("../data/friends.js").Freunden;
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");

app.use(bodyParser.urlencoded({extended: true}));
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
      // res.json(newFriend);

      console.log(newFriend.scores);

      //match algorithm
      var nooFriend = newFriend.scores.map(Number);
      var totals = [];

        for (var i = 0; i < friends.length; i++) {
          var oldFriends = friends[i].scores;
          var difference = [];

          for (var j = 0; j < nooFriend.length; j++) {
            difference.push(Math.abs(nooFriend[j] - oldFriends[j]));
          }

        console.log(difference);
        var totalDifference = difference.reduce((a, b) => a + b, 0);
        totals.push(totalDifference);
        };

      totals.pop();
      console.log(totals);

      var match = totals.indexOf(totals.reduce((a, b) => Math.min(a, b)));
      console.log(match);

      var BFF = friends[match].name;
      var BFFimg = friends[match].photo;
      console.log(`${BFF} is your match!`);
      res.json(friends[match]);
    })

    // 404 error page
    app.use(function (req, res, next) {
      res.status(404);
      res.sendFile(path.join(__dirname + "/../public/error.html"));
    })
  };

