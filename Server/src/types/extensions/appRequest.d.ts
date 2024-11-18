import { Request } from "express";
import Token from "../DTOs/token";

declare module 'express' {
    interface Request {
        token?: Token
    }
}

export {}