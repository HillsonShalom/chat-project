import { Types } from "mongoose";
import IChat from "./chat.model";

interface IUser {
    username: string;
    password: string;
    photoUrl?: string;
    phone: string;
    contacts: {
        nickname: string;
        phone: string;
        chat: Types.ObjectId | IChat
    }[]
}

export default IUser