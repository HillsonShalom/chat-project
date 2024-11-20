import { User } from "./incoming.dtos";

export enum DataStatus {
  LOADING = "LOADING",
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  IDLE = "IDLE",
}

interface statesParent {
  error: string | null;
  status: DataStatus;
}

export interface userState extends statesParent {
    user: User | null;
}
