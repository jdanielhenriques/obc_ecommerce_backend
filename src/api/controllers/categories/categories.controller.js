const CategoriesModel = require("../../models/Categories/categories.model");

function insertCategories(category_name, Categories_idCategories) {
  CategoriesModel.insertCategories(category_name, Categories_idCategories);
}

async function getCategories() {
  let result = await CategoriesModel.getCategories();
  console.log("Bellow");

  return result;
}

function updateCategories(
  idCategories,
  category_name,
  Categories_idCategories
) {
  CategoriesModel.updateCategories(
    idCategories,
    category_name,
    Categories_idCategories
  );
}
function deleteCategories(idCategories) {
  CategoriesModel.deleteCategories(idCategories);
}

module.exports = {
  insertCategories,
  deleteCategories,
  updateCategories,
  getCategories,
};
