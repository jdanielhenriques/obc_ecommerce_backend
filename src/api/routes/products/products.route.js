"use strict";

const express = require("express");
//const crimePrepertratorControllerInstance = require("../controllers/crimePerpretator.controller");
let router = express.Router();

router.route("/get").get(async (request, response) => {
  try {
    const result = { name: "Pao", price: 3000 };

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/insert").post(async (request, response) => {
  try {
    const result = { name: "Pao", price: 3000 };

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/update").post(async (request, response) => {
  try {
    const result = { name: "Pao", price: 3000 };

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

router.route("/delete").post(async (request, response) => {
  try {
    const result = { name: "Pao", price: 3000 };

    response.status(200).send(result);
  } catch (e) {
    response.status(500).send(e);
  }
});

module.exports = router;
