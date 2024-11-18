import { Types } from "mongoose";

export interface registerRes {
    id: Types.ObjectId,
    message: string
}

export interface loginRes {
    token: string;
    message: string;
}

export interface getAccountRes {
    username: string;
    phone: string;
    photoUrl?: string;
    id: Types.ObjectId
}