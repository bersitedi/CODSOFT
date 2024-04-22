import express from "express";
import {
  submitMessage,
  getAllMessages,
  getMessageById,
} from "../controllers/messageController";

const router = express.Router();

router.post("/submit", submitMessage);

router.get("/", getAllMessages);
router.get("/:id", getMessageById);

export default router;
