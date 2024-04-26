const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  getAllUsers,
  deleteUser,
} = require("../controllers/userControllers");
const { adminGuard, authGuard } = require("../middleware/authMiddleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile/:userId", authGuard, updateProfile);
router.get("/", authGuard, adminGuard, getAllUsers);
router.delete("/:userId", authGuard, adminGuard, deleteUser);

module.exports = router;
