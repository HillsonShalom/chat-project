import { Request, Response } from "express"
import { AppResError } from "../../types"

const setImage = async (req: Request, res: Response) => {
    try {
        res.send("hello")
    } catch(err) {
        const error = err as AppResError
        res.status(error.statusCode || 500).send(error.message)
    }
}

export default setImage