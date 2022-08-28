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

async function getProducts() {
  try {
    return new Promise(function (resolve, reject) {
      let result = null;
      instance.query(
        "SELECT * FROM Products",
        function (error, results, fields) {
          console.log(JSON.stringify(results));
          result = JSON.stringify(results);

          resolve(result);
        },
        function (error) {
          reject(false);
          throw new Error("Error: " + error);
        },
        function (error) {
          reject(undefined);
          throw new Error("error: " + error.message);
        },
        function () {
          console.log("ok");
        }
      );
    });

    /*     let result = null
    await instance.query("SELECT * FROM Products", function (error, results, fields) {
     console.log(JSON.stringify(results));
      result= JSON.stringify(results);
    });

        console.log("Here");

    console.log(result);
    return result */
    /*   instance.query("SELECT * FROM Products", function (result) {
      console.log(result);
      return result; 
    });*/
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
    instance.query(SQL`DELETE FROM Products WHERE idProducts = ${idProducts}`);
    return 1;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  insertProducts,
  deleteProducts,
  updateProducts,
  getProducts,
};
