// Set up MySQL Connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port:3306,
  host: "localhost",
  user: "root",
  password: "Mysqpass!1",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
