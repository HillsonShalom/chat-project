import { Router } from "express";
import getChat from "../controllers/chat/getChat";
import createMessage from "../controllers/chat/createMessage";
import setMessage from "../controllers/chat/setMessage";
import deleteMessage from "../controllers/chat/deleteMessage";

const chatRouter = Router()

chatRouter.get('/', getChat)
chatRouter.post('/', createMessage)
chatRouter.put('/', setMessage)
chatRouter.delete('/', deleteMessage)

export default chatRouter