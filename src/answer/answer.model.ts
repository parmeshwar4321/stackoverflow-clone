import * as mongoose from "mongoose";
import Answer from "./answer.interface";

const answerSchema = new mongoose.Schema(
  {
    postId: {
      ref: "Post",
      type: mongoose.Schema.Types.ObjectId,
    },
    text: String,
    isVerified: Boolean,
    vote: Number,
  },
  {
    timestamps: true,
  }
);

const answerModel = mongoose.model<Answer & mongoose.Document>(
  "Answer",
  answerSchema
);

export default answerModel;
