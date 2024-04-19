import express from "express";

const router = express.Router();

import {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  getAllUsers,
  deleteUser,
} from "../controllers/userControllers";
import { adminGuard, authGuard } from "../middleware/authMiddleware";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfile/:userId", authGuard, updateProfile);
router.get("/", authGuard, adminGuard, getAllUsers);
router.delete("/:userId", authGuard, adminGuard, deleteUser);

export default router;
