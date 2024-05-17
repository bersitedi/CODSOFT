const { Schema, model } = require("mongoose");

const NewsCategoriesSchema = new Schema(
  {
    title: { type: String, required: true },
    news: [{ type: Schema.Types.ObjectId, ref: "News" }],
  },
  { timestamps: true }
);

const NewsCategories = model("NewsCategories", NewsCategoriesSchema);
module.exports = NewsCategories;
