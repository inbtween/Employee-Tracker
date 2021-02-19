// Dependencies
const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "painting",
  database: "employee_db",
});

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
});
connection.query = util.promisify(connection.query);
module.exports = connection;
