const express = require("express");
const router = express.Router();
const {
  createNewsCategory,
  deleteNewsCategory,
  getAllNewsCategories,
  updateNewsCategory,
  getSingleCategory,
} = require("../controllers/newsCategoriesControllers");
const { adminGuard, authGuard } = require("../middleware/authMiddleware");

router
  .route("/")
  .post(authGuard, adminGuard, createNewsCategory)
  .get(getAllNewsCategories);

router
  .route("/:newsCategoryId")
  .get(getSingleCategory)
  .put(authGuard, adminGuard, updateNewsCategory)
  .delete(authGuard, adminGuard, deleteNewsCategory);

module.exports = router;
