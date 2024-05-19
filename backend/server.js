const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const {
  errorResponseHandler,
  invalidPathHandler,
} = require("./middleware/errorHandler");

const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const postCategoriesRoutes = require("./routes/postCategoriesRoutes");
const messageRoutes = require("./routes/messageRoutes");
const newsRoutes = require("./routes/newsRoutes");
const newsCategoriesRoutes = require("./routes/newsCategoriesRoutes");

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const {
  uploadFile,
  getFileStream,
} = require("./middleware/uploadPictureMiddleware");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "https://springconsultinget.com/",
    exposedHeaders: ["x-totalcount", "x-totalpagecount"],
  })
);

app.get("/", (req, res) => {
  res.send("server is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/post-categories", postCategoriesRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/news-categories", newsCategoriesRoutes);

app.use(invalidPathHandler);
app.use(errorResponseHandler);

app.get("/images/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

app.post("/images", upload.single("image"), async (req, res) => {
  const file = req.file;
  const result = await uploadFile(file);
  await unlinkFile(file.path);
  res.send({ imagePath: `/images/${result.Key}` });
});

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
