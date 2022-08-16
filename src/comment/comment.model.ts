import * as mongoose from "mongoose";
import Comment from "./comment.interface";

const commentSchema = new mongoose.Schema(
  {
    postId: {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId,
    },
    text: String,
  },
  { timestamps: true }
);

const commentModel = mongoose.model<Comment & mongoose.Document>(
  "Comment",
  commentSchema
);

export default commentModel;
