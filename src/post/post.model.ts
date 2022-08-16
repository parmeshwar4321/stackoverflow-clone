import * as mongoose from "mongoose";
import Post from "./post.interface";

const postSchema = new mongoose.Schema(
  {
    author: {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
    description: String,
    question: String,
  },
  {
    timestamps: true,
  }
);

const postModel = mongoose.model<Post & mongoose.Document>("Post", postSchema);

export default postModel;
