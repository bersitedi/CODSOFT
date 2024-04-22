import Message from "../models/Message";

const submitMessage = async (req, res) => {
  try {
    const { email, subject, message } = req.body;

    // Create a new message document
    const newMessage = new Message({
      email,
      subject,
      message,
    });

    // Save the message to the database
    await newMessage.save();

    res.status(201).json({ message: "Message submitted successfully" });
  } catch (error) {
    console.error("Error submitting message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllMessages = async (req, res) => {
  try {
    // Fetch all messages from the database
    const messages = await Message.find();

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { submitMessage, getAllMessages };
