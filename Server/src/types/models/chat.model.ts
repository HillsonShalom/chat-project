import { Types } from "mongoose"
import IMessage from "./message.model"
import chatType from "../enums/chatType";
import IGroup from "./group.model";
import IUser from "./user.model";

interface IChat {
    type: chatType;
    participants: IUser[] | Types.ObjectId[];
    group?: IGroup | Types.ObjectId;

}

export default IChat