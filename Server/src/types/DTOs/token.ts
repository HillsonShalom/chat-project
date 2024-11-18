import { Types } from "mongoose"
import { User } from "../../DAL"

interface Token {
    id: Types.ObjectId | User
}

export default Token