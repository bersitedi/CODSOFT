const express = require("express");
const router = express.Router();
const {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
  getAllPostsByCategory,
} = require("../controllers/postControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");

router.get("/category", getAllPostsByCategory);

router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);

router
  .route("/:slug")
  .put(authGuard, adminGuard, updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

module.exports = router;
