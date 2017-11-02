 // Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var express = require("method-override");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// app.use("/", routes);

// app.listen(port);