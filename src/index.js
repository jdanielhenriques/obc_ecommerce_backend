require("dotenv").config();
const multer = require("multer");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = require("express")();

const cors = require("cors");

const productsRouter = require("./api/routes/products/products.route");

const categoriesRouter = require("./api/routes/categories/categories.route");

const imagesRouter = require("./api/routes/images/images.route");

app.use(cors());
app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(process.env.PORT, () =>
  console.log(`server is listening! ${process.env.PORT}`)
);

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/images", imagesRouter);
