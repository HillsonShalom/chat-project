import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AppResError, loginDto, loginRes, Token } from "../../types";
import { UserCollection } from "../../DAL";

const login = async (req: Request<any, any, loginDto>, res: Response) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      throw new AppResError(400, "some data is missing");

    const user = await UserCollection.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password)))
      throw new AppResError(401, "user not found or the password was wrong");

    const token: Token = { id: user.id };
    const signedToken = jwt.sign(token, process.env.SECRET_KEY!, {
      expiresIn: "24h",
    });

    res.setHeader("Authorization", `Bearer ${signedToken}`);
    const response: loginRes = {
      token: signedToken,
      message: "logined successfully, got the token",
    };
    res.status(200).json(response);
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 500).send(error.message);
  }
};

export default login;
