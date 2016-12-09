// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
//get the routes and data from other files
const apiRoutes = require("./app/routing/api-routes.js")(app);
const htmlRoutes = require("./app/routing/html-routes.js")(app);
var friendsArray = require("./app/data/friends.js");

// Sets up the Express App
// =============================================================

var PORT = process.env.port;
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//============================================================

//start listening on 3000
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});