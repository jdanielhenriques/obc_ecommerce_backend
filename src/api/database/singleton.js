require("dotenv").config();
const mysql = require("mysql");
let connection = null;
const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;

function singleton() {
  try {
    if (connection == null) {
      connection = mysql.createConnection({
        host: "localhost",
        user: "ecommerce",
        password: "password",
        database: "obc_ecommerce",
        /*         host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE, */
      });
      return connection;
    } else return connection;
  } catch (e) {
    console.log("Error ocurred returning database instance: " + e);
  }
}

function bla() {
  /* console.log(
    process.env.HOST +
      " " +
      process.env.USER +
      " " +
      process.env.PASSWORD +
      " " +
      process.env.DATABASE
  ); */

  let con = singleton();
  var sql =
    "INSERT INTO Postal_code(postal_code, locality) VALUES ('12345690', 'popkjlhmç~j')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}
bla();
module.exports = singleton;
