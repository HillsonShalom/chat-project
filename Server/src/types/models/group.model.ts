import { Types } from "mongoose";
import IUser from "./user.model";

interface IGroup {
    groupName: string;
    createdBy: IUser | Types.ObjectId;
    photoUrl?: string;
}

export default IGroup