require("dotenv").config();

const app = require("express")();

const cors = require("cors");

const productsRouter = require("./api/routes/products/products.route");

app.use(cors());

app.listen(process.env.PORT, () =>
  console.log(`server is listening! ${process.env.PORT}`)
);

app.use("/products", productsRouter);
