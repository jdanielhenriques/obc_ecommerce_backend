const ImagesModel = require("../../models/images/images.model");

function insertImages(image, image_description, Products_idProducts) {
  ImagesModel.insertImages(image, image_description, Products_idProducts);
}

async function getImages() {
  let result = await ImagesModel.getImages();
  return result;
}

function updateImages(idImages, image, image_description, Products_idProducts) {
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

async function getImagePathById(idImages) {
  let result = await ImagesModel.getImagePathById(idImages);
  return result;
}
module.exports = {
  insertImages,
  deleteImages,
  updateImages,
  getImages,
  getImagePathById,
};
