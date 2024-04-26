import express from "express";
import dotenv from "dotenv";
import path from "path";
import connectDB from "./config/db";
import cors from "cors";
import {
  errorResponseHandler,
  invalidPathHandler,
} from "./middleware/errorHandler";

import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import postCategoriesRoutes from "./routes/postCategoriesRoutes";
import messageRoutes from "./routes/messageRoutes";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/post-categories", postCategoriesRoutes);
app.use("/api/messages", messageRoutes);

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(invalidPathHandler);
app.use(errorResponseHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
