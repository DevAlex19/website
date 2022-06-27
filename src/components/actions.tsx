import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebaseConfig";
import {collection,addDoc} from 'firebase/firestore';



const data = {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA'
  };

export const addUser = createAsyncThunk('login/addUsers',async()=>{
    const users = collection(db,'users');
    const x = await addDoc(users,{name:'sddss',age:222});
    console.log(x)
    return 'sdasd';
})