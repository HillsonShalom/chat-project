import { Request, Response } from "express"
import { AppResError } from "../../types"

const getAccount = async (req: Request, res: Response) => {
    try {

    } catch(err) {
        const error = err as AppResError
        res.status(error.statusCode || 500).send(error.message)
    }
}

export default getAccount