import { Router } from "express";
import getAllContacts from "../controllers/contacts/getAllContacts";
import addContact from "../controllers/contacts/addContact";
import setContact from "../controllers/contacts/setContact";
import deleteContact from "../controllers/contacts/deleteContact";

const contactsRouter = Router()

contactsRouter.get('/', getAllContacts)
contactsRouter.post('/', addContact)
contactsRouter.patch('/', setContact)
contactsRouter.delete('/', deleteContact)

export default contactsRouter