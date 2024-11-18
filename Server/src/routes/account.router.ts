import { Router } from "express";
import login from "../controllers/account/login";
import register from "../controllers/account/register";
import getAccount from "../controllers/account/getAccount";
import setAccount from "../controllers/account/setAccount";
import logout from "../controllers/account/logout";
import setImage from "../controllers/account/setImage";
import attachToken from "../middlewares/attachToken";

const accountRouter = Router()

accountRouter.post('/', login)
accountRouter.post('/register', register)
accountRouter.post('/image', setImage)
accountRouter.get('/', attachToken, getAccount)
accountRouter.patch('/', setAccount)
accountRouter.delete('/', logout)

export default accountRouter