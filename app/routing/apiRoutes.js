var path = require('path');
//path to connect to each other
var friends= require('../data/friends.js')
// console.log(friends) test that it works!

//allowing the file to use express from server.js
module.exports= function(app){
    app.get("/api/friends", function(req, res) {
      return res.json(friends); //wouldn't work without return either hmmmm
      });
    
      //post to add to the array
      app.post("/api/friends", function(req, res) {

        var newFriend= req.body;
        //
        // newFriend.routeName= newFriend.name.replace(/\s+/g, "").toLowerCase(); //this line adds a routeName

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
      });
}




