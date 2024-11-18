import { Router } from "express";
import accountRouter from "./account.router";
import chatRouter from "./chat.router";
import contactsRouter from "./contacts.router";
import attachToken from "../middlewares/attachToken";

const router = Router()

router.use('/account', accountRouter)
router.use('/contacts', attachToken, contactsRouter)
router.use('/chat', attachToken, chatRouter)

export default router