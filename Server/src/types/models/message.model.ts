import { Types } from "mongoose";
import IUser from "./user.model";
import IChat from "./chat.model";

interface IMessage {
    content: string;
    sender: IUser | Types.ObjectId;
    chat: IChat | Types.ObjectId;

    createdAt: Date;

    replyOn?: Types.ObjectId | IMessage;
    fileUrl?: string;
    fileType?: string;
}

export default IMessage