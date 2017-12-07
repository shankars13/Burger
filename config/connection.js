// Set up MySQL Connection.
var mysql = require("mysql");


//*********** LOCALHOST Connection ************/
// var connection = mysql.createConnection({
//   port:3306,
//   host: "localhost",
//   user: "root",
//   password: "Mysqpass!1",
//   database: "burgers_db"
// });


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
//***********************************************/

//**************   HEROKU connection ************** 
var connection = mysql.createPool({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'ba39536af8aeb6',
    password: '8a72570e',
    database: 'heroku_ec767bef39bff76',
    connectionLimit: 5
});

connection.getConnection(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.error("Connected to : " + connection.threadId);
});

module.exports = connection;
