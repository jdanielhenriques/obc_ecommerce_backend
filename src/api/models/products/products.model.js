const singleton = require("../../database/singleton");
const instance = singleton();
const SQL = require("sql-template-strings");

function insertProducts(
  product_name,
  product_description,
  product_price,
  product_stock,
  Categories_idCategories
) {
  try {
    instance.query(
      SQL`INSERT INTO Products(product_name, product_description, product_price, product_stock, Categories_idCategories) VALUES (${product_name},${product_description},${product_price},${product_stock},${Categories_idCategories})`
    );
    console.log("1 record inserted");
  } catch (err) {
    console.log(err);
  }
}

function getProducts() {
  try {
    instance.query("SELECT * FROM Postal_code", function (result) {
      console.log(result);
    });
  } catch (err) {
    console.log(err);
  }
}

function updateProducts(
  idProducts,
  product_name,
  product_description,
  product_price,
  product_stock,
  Categories_idCategories
) {
  try {
    instance.query(
      SQL`UPDATE Products SET product_name = ${product_name}, product_description = ${product_description}, product_price = ${product_price}, product_stock = ${product_stock}, Categories_idCategories = ${Categories_idCategories} WHERE idProducts = ${idProducts}`
    );
  } catch (err) {
    console.log(err);
  }
}

function deleteProducts(idProducts) {
  try {
    instance.query(SQL `DELETE FROM Products WHERE idProducts = ${idProducts}`);
  } catch (err) {
    console.log(err);
  }
}

modules.exports = { insertProducts, deleteProducts, updateProducts, getProducts };



