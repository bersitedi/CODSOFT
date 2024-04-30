const express = require("express");
const {
  submitMessage,
  getAllMessages,
  getMessageById,
  deleteMessage,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/submit", submitMessage);

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.delete("/:id", deleteMessage);

module.exports = router;
