import { Schema, model } from "mongoose";

const PostCategoriesSchema = new Schema(
  {
    title: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

const PostCategories = model("PostCategories", PostCategoriesSchema);
export default PostCategories;
