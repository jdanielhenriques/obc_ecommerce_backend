require("dotenv").config();
const mysql = require("mysql");
let connection = null;

function singleton() {
  try {
    if (connection == null) {
      connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      });
      return connection;
    } else return connection;
  } catch (e) {
    console.log("Error ocurred returning database instance: " + e);
  }
}

module.exports = singleton;
