/// <reference path="../types/extensions/appRequest.d.ts" />

import { NextFunction, Request, Response } from "express";
import { AppResError, Token } from "../types";
import { UserCollection } from "../DAL";
import { Types } from "mongoose";
import jwt from "jsonwebtoken";

const attachToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers["authorization"] as string;
    if (token.split(" ")[0] !== "Bearer")
      throw new AppResError(401, "Defective token!");
    const tokenJwt = token.split(" ")[1];
    req.token = jwt.verify(tokenJwt, process.env.SECRET_KEY!) as Token;
    req.token = { id: await UserCollection.findById(req.token.id)} as Token

    next();
  } catch (err) {
    const error = err as AppResError;
    res.status(error.statusCode || 401).send(error.message);
  }
};

export default attachToken;
