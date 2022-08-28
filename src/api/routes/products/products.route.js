"use strict";

const productsController = require("../../controllers/products/products.controller");

const express = require("express");
//const crimePrepertratorControllerInstance = require("../controllers/crimePerpretator.controller");
let router = express.Router();

router.route("/get").get(async (request, response) => {
  try {
    const result = await productsController.getProducts();

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/insert").post(async (request, response) => {
  try {
    const result = productsController.insertProducts(
      request.body.product_name,
      request.body.product_description,
      request.body.product_price,
      request.body.product_stock,
      request.body.Categories_idCategories
    );

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/update").post(async (request, response) => {
  try {
    const result = productsController.updateProducts(
      request.body.idProducts,
      request.body.product_name,
      request.body.product_description,
      request.body.product_price,
      request.body.product_stock,
      request.body.Categories_idCategories
    );

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/delete").post(async (request, response) => {
  try {
    let result = productsController.deleteProducts(request.body.idProducts);
    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

module.exports = router;
