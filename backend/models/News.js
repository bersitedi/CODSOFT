const { Schema, model } = require("mongoose");

const NewsSchema = new Schema(
  {
    title: { type: String, required: true },
    caption: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    body: { type: Object, required: true },
    photo: { type: String, required: false },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    tags: { type: [String] },
    categories: [{ type: Schema.Types.ObjectId, ref: "NewsCategories" }],
  },
  { timestamps: true }
);

const News = model("News", NewsSchema);
module.exports = News;
