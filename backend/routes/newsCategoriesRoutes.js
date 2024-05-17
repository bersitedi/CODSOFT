const express = require("express");
const router = express.Router();

const { adminGuard, authGuard } = require("../middleware/authMiddleware");
const {
  createNewsCategory,
  getAllNewsCategories,
  deleteNewsCategory,
  updateNewsCategory,
  getSingleNewsCategory,
} = require("../controllers/newsCategoriesControllers");

router
  .route("/")
  .post(authGuard, adminGuard, createNewsCategory)
  .get(getAllNewsCategories);

router
  .route("/:newsCategoryId")
  .get(getSingleNewsCategory)
  .put(authGuard, adminGuard, updateNewsCategory)
  .delete(authGuard, adminGuard, deleteNewsCategory);

module.exports = router;
