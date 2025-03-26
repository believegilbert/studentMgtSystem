 import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
    name: "user",

    initialState:{
        currentUser: null,
        isFetching: false,
        error: false
    },

    
    // Reducers are functions that specify how the application's state changes in response to actions sent to the store.
    // Remember that actions only describe what happened, but don't describe how the application's state changes.
    reducers:{//actions
        loginStart:(state)=>{
            state.isFetching = true;
        },
        loginSuccess:(state, action)=>{
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload
        },
        loginFailure:(state)=>{
             state.isFetching = false;
                state.error = true;
        },
        logOut: (state)=>{
            state.currentUser = null;
            state.isFetching = false;
            state.error = false;
        }
    }
 })

    export const { loginStart, loginSuccess, loginFailure, logOut } = userSlice.actions;
    export default userSlice.reducer;