var express = require("express");
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 3001;
var app = express();
var db = require("./we-search-db/models");
var session = require("express-session");
var passport = require("./we-search-db/config/passport.js");


// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Import routes and give the server access to them.
console.log(routes)
var routes = require("./api-routes/api-routes.js");
app.use("/", routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
