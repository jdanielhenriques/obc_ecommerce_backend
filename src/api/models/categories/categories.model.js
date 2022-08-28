const singleton = require("../../database/singleton");
const instance = singleton();
const SQL = require("sql-template-strings");

function insertCategories(category_name, Categories_idCategories) {
  try {
    instance.query(
      SQL`INSERT INTO  Categories (category_name,Categories_idCategories) VALUES (${category_name}, ${Categories_idCategories});`
    );
    console.log("1 record inserted");
  } catch (err) {
    console.log(err);
  }
}

async function getCategories() {
  try {
    return new Promise(function (resolve, reject) {
      let result = null;
      instance.query(
        "SELECT * FROM categories",
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

function updateCategories(idCategories, category_name, Categories_idCategories) {
  try {
    instance.query(
      SQL`UPDATE Categories SET category_name = ${category_name}, Categories_idCategories = ${Categories_idCategories}
WHERE idCategories = ${idCategories};`
    );
  } catch (err) {
    console.log(err);
  }
}

function deleteCategories(idCategories) {
  try {
    console.log(idCategories)
    instance.query(
      SQL`DELETE FROM Categories WHERE idCategories = ${idCategories}`
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  insertCategories,
  deleteCategories,
  updateCategories,
  getCategories,
};
