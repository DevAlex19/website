import { createSlice } from "@reduxjs/toolkit";
import {loginUser,getUser, updateUser } from "../data/actions";

type createUserType = {
    state:false;
}
export type userLoginType = {
    state:boolean;
    firstName?:string,
    lastName?:string,
    registerEmail?:string,
    registerPassword?:string,
    town?:string,
    city?:string,
    phone?:string,
    address?:string,
    id?:string
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
        registerPassword:'',
        town:'',
        city:'',
        phone:'',
        address:'',
        id:''
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
                registerPassword:'',
                town:'',
                city:'',
                phone:'',
                address:'',
                id:''
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
                state.userLogin = {...state.userLogin,...action.payload};
            }
        });
        builder.addCase(updateUser.fulfilled,(state,action)=>{
            state.userLogin = {...state.userLogin,...action.payload};
        })
    }
})

export const {logOut} = loginSlice.actions;

export default loginSlice.reducer;