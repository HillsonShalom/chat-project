import { Document, model, Schema } from "mongoose";
import { IChat } from "../../types";

interface chatDocument extends IChat, Document {}

const chatSchema = new Schema<chatDocument>({
    type: {
        type: String,
        enum: ['USER', 'GROUP']
    },
    participants: {
        type: [Schema.Types.ObjectId],
        ref: 'User'
    },
    group: {
        groupName: {
            type: String
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        photoUrl: {
            type: String
        }
    }
})

export const ChatCollection = model('Chat', chatSchema)