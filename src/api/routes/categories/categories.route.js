"use strict";

const categoriesController = require("../../controllers/categories/categories.controller");

const express = require("express");
//const crimePrepertratorControllerInstance = require("../controllers/crimePerpretator.controller");
let router = express.Router();

router.route("/get").get(async (request, response) => {
  try {
    const result = await categoriesController.getCategories();

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/insert").post(async (request, response) => {
  try {
    const result = categoriesController.insertCategories(
      request.body.category_name,
      request.body.Categories_idCategories
    );

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/update").post(async (request, response) => {
  try {
    const result = categoriesController.updateCategories(
      request.body.idCategories,
      request.body.category_name,
      request.body.Categories_idCategories
    );

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/delete").post(async (request, response) => {
  try {
    const result = categoriesController.deleteCategories(
      request.body.idCategories
    );
    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

module.exports = router;
