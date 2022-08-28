const productsModel = require("../../models/products/products.model");

function insertProducts(
  product_name,
  product_description,
  product_price,
  product_stock,
  Categories_idCategories
) {
  productsModel.insertProducts(
    product_name,
    product_description,
    product_price,
    product_stock,
    Categories_idCategories
  );
}

async function getProducts() {
  let result = await productsModel.getProducts();
  console.log("Bellow");

  return result;
}

function updateProducts(
  idProducts,
  product_name,
  product_description,
  product_price,
  product_stock,
  Categories_idCategories
) {
  productsModel.updateProducts(
    idProducts,
    product_name,
    product_description,
    product_price,
    product_stock,
    Categories_idCategories
  );
}
function deleteProducts(idProducts) {
  return productsModel.deleteProducts(idProducts);
}

module.exports = {
  insertProducts,
  deleteProducts,
  updateProducts,
  getProducts,
};
