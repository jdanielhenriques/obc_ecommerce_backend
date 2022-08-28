"use strict";
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
exports.uploadImage = upload.single("image");

const ImagesController = require("../../controllers/Images/images.controller");

const express = require("express");
//const crimePrepertratorControllerInstance = require("../controllers/crimePerpretator.controller");
let router = express.Router();

router.route("/get").get(async (request, response) => {
  try {
    const result = await ImagesController.getImages();

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/insert").post(async (request, response) => {
  try {
    console.log(request.file);
    /*     console.log(request.files['image'][0]);
    console.log(request.body.image_description);
    console.log(request.body.Products_idProducts);
    const result = ImagesController.insertImages(
      request.body.image,
      request.body.image_description,
      request.body.Products_idProducts
    );

    response.status(200).send(result); */
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/update").post(async (request, response) => {
  try {
    const result = ImagesController.updateImages(
      request.body.idImages,
      request.body.image,
      request.body.image_description,
      request.body.Products_idProducts
    );

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/delete").post(async (request, response) => {
  try {
    const result = ImagesController.deleteImages(request.body.idImages);
    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

module.exports = router;
