// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
// var require= require("require")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require the routes to other js pages.
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

//GO BACK AND ADD APP ROUTES

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  