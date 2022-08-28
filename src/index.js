require("dotenv").config();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const bodyParser = require("body-parser");

const app = require("express")();

const cors = require("cors");

app.use(bodyParser.json());

const productsRouter = require("./api/routes/products/products.route");

const categoriesRouter = require("./api/routes/categories/categories.route");

const imagesRouter = require("./api/routes/images/images.route");

app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`server is listening! ${process.env.PORT}`)
);

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);
app.use("/images", imagesRouter);
