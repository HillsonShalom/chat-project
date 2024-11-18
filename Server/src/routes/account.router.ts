import { Router } from "express";
import login from "../controllers/account/login";
import register from "../controllers/account/register";
import getAccount from "../controllers/account/getAccount";
import setAccount from "../controllers/account/setAccount";
import logout from "../controllers/account/logout";

const accountRouter = Router()

accountRouter.post('/', login)
accountRouter.post('/register', register)
accountRouter.get('/', getAccount)
accountRouter.patch('/', setAccount)
accountRouter.delete('/', logout)

export default accountRouter