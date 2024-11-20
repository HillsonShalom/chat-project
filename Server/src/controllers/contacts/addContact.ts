import { Request, Response } from "express";
import { addContactDto, AppResError } from "../../types";
import { User, UserCollection } from "../../DAL";

const addContact = async (
  req: Request<any, any, addContactDto>,
  res: Response
) => {
  try {
    const user = req.token!.id as User;
    const friend = await UserCollection.findOne({ phone: req.body.phone });
    if (!friend) throw new AppResError(404, "contact not found!");
    user.contacts.push({ ...req.body, chat: friend.id });
    await user.save();
    res.status(201).send("one contact added");
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default addContact;
