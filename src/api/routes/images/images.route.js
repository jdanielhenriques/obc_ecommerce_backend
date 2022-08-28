"use strict";
const multer = require("multer");
const path = require("path");
var multiparty = require("multiparty");
let options = {
  autoFiles: true,
  uploadDir: path.join(__dirname, "../../../public/images/"),
};
var form = new multiparty.Form(options);
const localFileDeleteMiddleware = require('../../middlewares/images/imageHandler')
const ImagesController = require("../../controllers/Images/images.controller");

const express = require("express");
//const crimePrepertratorControllerInstance = require("../controllers/crimePerpretator.controller");
const router = express.Router();
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "../../../public/images/");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({
  storage: storage,
});
router.route("/get").get(async (request, response) => {
  try {
    const result = await ImagesController.getImages();

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router
  .route("/insert", upload.single("image"))
  .post(async (request, response) => {
    try {
      form.parse(request, function (err, fields, files) {
        if (err) {
          throw err;
        } else {
          const result = ImagesController.insertImages(
            files.image[0].path,
            fields.image_description[0],
            parseInt(fields.Products_idProducts[0])
          );
          console.log(result);
        }
      });
    } catch (e) {
      response.status(500).send(e);
    }
  });

router.route("/update").post(async (request, response) => {
  try {
    form.parse(request, function (err, fields, files) {
      if (err) {
        throw err;
      } else {
        const result = ImagesController.updateImages(
          parseInt(fields.idImages[0]),
          files.image[0].path,
          fields.image_description[0],
          parseInt(fields.Products_idProducts[0])
        );
        console.log(result);
      }
    });

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/delete").post(async (request, response) => {
  try {
    form.parse(request, function (err, fields, files) {
      if (err) {
        throw err;
      } else {
        let id = parseInt(fields.idImages[0])
        localFileDeleteMiddleware.deleteLocalImage(id)
        const result = ImagesController.deleteImages(id)
        console.log(result);
      }
    });

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

module.exports = router;
