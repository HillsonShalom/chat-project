import { createSlice } from "@reduxjs/toolkit";
import { DataStatus, userState } from "../../types/redux.types";

const initialState: userState = {
    status: DataStatus.IDLE,
    error: null,
    user: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export default userSlice