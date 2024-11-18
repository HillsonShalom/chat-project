import { Request, Response } from "express"
import { AppResError } from "../../types"

const deleteContact = async (req: Request, res: Response) => {
    try {

    } catch(err) {
        const error = err as AppResError
        res.status(error.statusCode || 500).send(error.message)
    }
}

export default deleteContact