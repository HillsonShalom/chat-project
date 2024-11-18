import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { AppResError, IUser, registerDto, registerRes } from "../../types";
import { UserCollection } from "../../DAL";

const register = async (req: Request<any, any, registerDto>, res: Response) => {
  try {
    const {username, password, phone} = req.body
    if (!username || !password || !phone) throw new AppResError(400, "some data is missing")
    const model: IUser = { username, phone, password: await bcrypt.hash(password, 5), contacts: [] };
    const newUser = new UserCollection(model);
    const user = await newUser.save()

    const response: registerRes = {id: user.id, message: `the new user '${username}' has created successfully`}
    res.status(201).json(response)
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default register;
