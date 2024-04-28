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
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile } = require("../middleware/uploadPictureMiddleware");

router.get("/category", getAllPostsByCategory);

router.route("/").post(authGuard, adminGuard, createPost).get(getAllPosts);

router
  .route("/:slug")
  .put(authGuard, adminGuard, upload.single("image"), updatePost)
  .delete(authGuard, adminGuard, deletePost)
  .get(getPost);

module.exports = router;
