var path = require('path');
//path to connect to each other
var friends= require('../data/friends.js');
// console.log(friends) test that it works!

//allowing the file to use express from server.js
module.exports= function(app){
    app.get("/api/friends", function(req, res) {
      return res.json(friends); //wouldn't work without return either hmmmm
      });

    //*****WORKING WORKING WORKING WORKING */
      //post to add to the array
      app.post("/api/friends", function(req, res) {

        var newFriend= req.body;
        // newFriend.routeName= newFriend.name.replace(/\s+/g, "").toLowerCase(); //this line adds a routeName

        console.log(newFriend)
        let matchedUser= friends[0];
        let diffScore= 0;

      //**First Loop**/
            for(var i = 0; i < friends.length; i++){
              console.log(friends[i].scores); //checking
              diffScore= 0;

                    // Second Loop
                  for(var x=0; x< friends[i].scores.length; x++){
                    let result= Math.abs(friends[i].scores[x] - newFriend.scores[x]);
                    console.log(result);

                    if(result != 0){
                      diffScore += result;
                    }
              } //second loop end

              if(i===0){
                lowestScore=diffScore;
              }

              if(diffScore < lowestScore){
                lowestScore=diffScore;
                matchedUser= friends[i];
              }
              console.log(friends[i].name)
              console.log(matchedUser.name); //this is the matched user. 
              console.log("The diff is:" + diffScore);
          }//original loop end(only doing this cuz two loops)

          //response
          res.json(matchedUser);
          friends.push(newFriend);
          console.log(friends);

          app.get("/api/friends", function(req, res){
              return res.json(friends);
          })

      });
};

 //*** BELOW IS WHAT WAS USED */
      // //post to add to the array
      // app.post("/api/friends", function(req, res) {

      //   var newFriend= req.body;
      //   //
      //   // newFriend.routeName= newFriend.name.replace(/\s+/g, "").toLowerCase(); //this line adds a routeName

      //   console.log(newFriend);

      //   friends.push(newFriend);

      //   res.json(newFriend);
      // });




