import { Document, model, Schema } from "mongoose";
import { IUser } from "../../types";

interface userDocument extends IUser, Document {}

const userSchema = new Schema<userDocument>({
username: {
    type: String
},
password: {
    type: String
},
phone: {
    type: String
},
photoUrl: {
    type: String
},
contacts: {
    type: [{
        nickname: {
            type: String,
            default: null
        },
        chat: {
            type: Schema.Types.ObjectId,
            ref: 'Chat'
        }
    }]
}
})



export const UserCollection = model('User', userSchema)