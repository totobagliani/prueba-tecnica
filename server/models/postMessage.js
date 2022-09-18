import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    content: String,
    creator: String,
    archived: Boolean,
  },
  {
    timestamps: true,
  }
);

var PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
