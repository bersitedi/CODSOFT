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

    await newMessage.save();

    res.status(201).json({ message: "Message submitted successfully" });
  } catch (error) {
    console.error("Error submitting message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getAllMessages = async (req, res) => {
  try {
    const filter = req.query.searchKeyword;
    let query = {};

    if (filter) {
      query.email = { $regex: new RegExp(filter, "i") };
    }

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;

    const messages = await Message.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(pageSize);

    const total = await Message.countDocuments(query);
    const pages = Math.ceil(total / pageSize);

    res.header({
      "x-filter": filter,
      "x-totalcount": JSON.stringify(total),
      "x-currentpage": JSON.stringify(page),
      "x-pagesize": JSON.stringify(pageSize),
      "x-totalpagecount": JSON.stringify(pages),
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessageById = async (req, res) => {
  try {
    const messageId = req.params.id;

    const message = await Message.findById(messageId);

    if (message) {
      res.status(200).json(message);
    } else {
      res.status(404).json({ error: "Message not found" });
    }
  } catch (error) {
    console.error("Error fetching message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { submitMessage, getAllMessages, getMessageById };
