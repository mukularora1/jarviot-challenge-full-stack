const mysql = require("mysql");

// Create a connection to the database
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER1,
  password: process.env.PASSWORD1,
  database: process.env.DB1,
});
// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
console.log("db.js");
module.exports = connection;
