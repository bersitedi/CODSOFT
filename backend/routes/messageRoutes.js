import express from "express";
import {
  submitMessage,
  getAllMessages,
} from "../controllers/messageController";

const router = express.Router();

// Route to submit a new message
router.post("/submit", submitMessage);

// Route to get all messages
router.get("/", getAllMessages);

export default router;
