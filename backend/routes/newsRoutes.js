const express = require("express");
const router = express.Router();
const {
  createNews,
  deleteNews,
  getNews,
  getAllNews,
  getNewsByCategory,
  updateNews,
} = require("../controllers/newsControllers");
const { authGuard, adminGuard } = require("../middleware/authMiddleware");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile } = require("../middleware/uploadPictureMiddleware");

router.get("/category", getNewsByCategory);

router.route("/").post(authGuard, adminGuard, createNews).get(getAllNews);

router
  .route("/:slug")
  .put(authGuard, adminGuard, upload.single("image"), updateNews)
  .delete(authGuard, adminGuard, deleteNews)
  .get(getNews);

module.exports = router;
