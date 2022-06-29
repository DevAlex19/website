import { createSlice } from "@reduxjs/toolkit";
import {loginUser,getUser } from "./actions";

type createUserType = {
    state:false;
}
type userLoginType = {
    state:boolean;
    firstName?:string,
    lastName?:string,
    registerEmail?:string,
    registerPassword?:string
}

export interface initialStateType{
    createUser:createUserType;
    userLogin:userLoginType;
}

const initialState:initialStateType = {
    createUser:{
        state:false
    },
    userLogin:{
        state:false,
        firstName:'',
        lastName:'',
        registerEmail:'',
        registerPassword:''
    }
}

export const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        logOut(state){
            state.userLogin = {
                state:false,
                firstName:'',
                lastName:'',
                registerEmail:'',
                registerPassword:''
            }
            localStorage.removeItem('user');
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(loginUser.fulfilled,(state,action)=>{
            if(action.payload.state){
                state.userLogin = action.payload;
            }else{
                state.userLogin = action.payload;
            }
        });
        builder.addCase(getUser.fulfilled,(state,action)=>{
            if(action.payload.state){
                state.userLogin = action.payload;
            }
        });
    }
})

export const {logOut} = loginSlice.actions;

export default loginSlice.reducer;