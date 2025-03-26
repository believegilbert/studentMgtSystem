import { Dispatch } from "@reduxjs/toolkit";
import { loginFailure, loginStart, loginSuccess } from "./userReducer";
import { toast } from "react-toastify";

// interface for the user
interface User {
    email: string,
    password: string,
}

export const login = (dispatch:Dispatch, user:User) => {
    dispatch(loginStart())
    try {
        dispatch(loginSuccess(user))
        toast.success("Login success!")
        console.log(user)
    } catch (error: unknown) { 
        if (error instanceof Error) {
            console.error(error.message)
        } 
        dispatch(loginFailure())
        toast.error("Login failed!")
    }
};