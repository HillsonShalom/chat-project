import { Document, model, Schema } from "mongoose";
import { IMessage } from "../../types";

interface messageDocument extends IMessage, Document {}

const messageSchema = new Schema<messageDocument>(
  {
    content: {
      type: String,
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: "Chat",
    },
    replyOn: {
      type: Schema.Types.ObjectId,
      ref: "Message",
    },
    fileUrl: {
      type: String,
    },
    fileType: {
      type: String,
      enum: [],
    },
  },
  { timestamps: true }
);

export const MessageCollection = model("Message", messageSchema);
