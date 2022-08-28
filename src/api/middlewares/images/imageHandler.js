var fs = require("fs");
let getImagePath = require("../../controllers/images/images.controller");

async function deleteLocalImage(idImages) {
  let path = await getImagePath.getImagePathById(idImages);
  console.log(path);

  fs.unlink(path, ()=> console.log("deleted"));
}

module.exports = {
deleteLocalImage
};
