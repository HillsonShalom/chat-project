import { Router } from "express";
import accountRouter from "./account.router";
import chatRouter from "./chat.router";
import contactsRouter from "./contacts.router";

const router = Router()

router.use('/account', accountRouter)
router.use('/contacts', contactsRouter)
router.use('/chat', chatRouter)

export default router