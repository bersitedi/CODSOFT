const express = require("express");
const {
  submitMessage,
  getAllMessages,
  getMessageById,
} = require("../controllers/messageController");

const router = express.Router();

router.post("/submit", submitMessage);

router.get("/", getAllMessages);
router.get("/:id", getMessageById);

module.exports = router;
