const singleton = require("../../database/singleton");
const instance = singleton();
const SQL = require("sql-template-strings");

function insertImages(image, image_description, Products_idProducts) {
  try {
    instance.query(
      SQL`INSERT INTO Images (image, image_description, Products_idProducts)VALUES (${image}, ${image_description},${Products_idProducts});`
    );
    console.log("1 record inserted");
  } catch (err) {
    console.log(err);
  }
}

async function getImages() {
  try {
    return new Promise(function (resolve, reject) {
      let result = null;
      instance.query(
        "SELECT * FROM Images",
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
  } catch (err) {
    console.log(err);
  }
}

function deleteImages(idImages) {
  try {
    instance.query(SQL`DELETE FROM Images WHERE idImages = ${idImages}`);
  } catch (err) {
    console.log(err);
  }
}
function updateImages(idImages, image, image_description, Products_idProducts) {
  try {
    instance.query(
      SQL`UPDATE Images SET image = ${image},
image_description = ${image_description}, Products_idProducts = ${Products_idProducts} WHERE idImages = ${idImages};`
    );
  } catch (err) {
    console.log(err);
  }
}

async function getImagePathById(idImages) {
  try {
    return new Promise(function (resolve, reject) {
      let result = null;
      instance.query(
        SQL`SELECT image FROM Images where idImages = ${idImages}`,
        function (error, results, fields) {
          result = (results[0].image);

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
  } catch (err) {
    console.log(err);
  }
}


module.exports = {
  insertImages,
  deleteImages,
  updateImages,
  getImages,
  getImagePathById,
};
