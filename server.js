var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();



var PORT = process.env.PORT || 3000;

var db = require("./models");
// app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exhbs= require("express-handlebars");
app.engine("handlebars", exhbs ());
app.set("view engine", "handlebars");


// var engines = require("consolidate");
// app.set("views",__dirname + "/public");
// app.engine("html", engines.mustache);
// app.set("view engine", "html");

// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);



db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});