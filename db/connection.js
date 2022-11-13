// Connect to database
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'password',
      database: 'employee_db'
    },
    console.log(`Connected to the database.`)
);

db.connect(function (err) {
    if (err) throw err;
});
  
  module.exports = db;