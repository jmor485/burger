var express = require("express");
var connection = require("./config/connection");
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
  console.log("Server listening on: http://localhost:" + PORT);
});

app.use(express.static(__dirname + '/public'));
app.use('/', require('./controllers/burgers_controller.js'));


app.listen(PORT);

module.exports = app;