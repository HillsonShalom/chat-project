import { Request, Response } from "express"
import { AppResError, getAccountRes } from "../../types"
import { User } from "../../DAL"

const getAccount = async (req: Request, res: Response) => {
    try {
        const user = req.token!.id as User
        const response: getAccountRes = {username: user.username, phone: user.phone, photoUrl: user.photoUrl, id: user.id}
        res.status(200).json(response)
    } catch(err) {
        const error = err as AppResError
        res.status(error.statusCode || 500).send(error.message)
    }
}

export default getAccount