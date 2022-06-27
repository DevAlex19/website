import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "./actions";

export const loginSlice = createSlice({
    name:'login',
    initialState:{
        createUser:{
            state:''
        }
    },
    reducers:{
    },
    extraReducers:(builder) =>{
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.createUser.state = action.payload;
        })
    }
})

export default loginSlice.reducer;