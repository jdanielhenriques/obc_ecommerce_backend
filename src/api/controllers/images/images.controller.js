const ImagesModel = require("../../models/images/images.model");

function insertImages(image, image_description, Products_idProducts) {
  ImagesModel.insertImages(image, image_description, Products_idProducts);
}

async function getImages() {
  let result = await ImagesModel.getImages();
  console.log("Bellow");

  return result;
}

function updateImages(
  idImages,
  image,
  image_description,
  Products_idProducts
) {
  ImagesModel.updateImages(
    idImages,
    image,
    image_description,
    Products_idProducts
  );
}
function deleteImages(idImages) {
  ImagesModel.deleteImages(idImages);
}

module.exports = {
  insertImages,
  deleteImages,
  updateImages,
  getImages,
};
