var path = require('path');
//path to connect to each other

//allowing this file to use express
module.exports= function(app){
//get route to display home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  

};
  