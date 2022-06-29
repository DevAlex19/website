import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../firebaseConfig";
import {collection,addDoc,getDocs} from 'firebase/firestore';
import { addUserType } from "./RegisterForm";
import { Inputs } from "./LoginForm";


const users = collection(db,'users');


export const addUser = createAsyncThunk('login/addUsers',async(data:addUserType)=>{
    const {registerEmail} = data;
    const usersList = await getDocs(users);
    const checkUser = usersList.docs.find(user => user.data().registerEmail === registerEmail);
    if(!checkUser){
      await addDoc(users,data);  
      return true;
    }
    return false;
})


export const loginUser = createAsyncThunk('login/loginUser',async(data:Inputs)=>{
  const {loginEmail,loginPassword} = data;
  const usersList = await getDocs(users);
  const checkUser = usersList.docs.find(user => user.data().registerEmail === loginEmail && user.data().registerPassword === loginPassword);
  if(checkUser){
    return {...checkUser.data(),state:true};
  }
  return {
    state:false,
    firstName:'',
    lastName:'',
    email:'',
    password:''
};
})

export const getUser = createAsyncThunk('login/getUser',async(data:string)=>{
    const usersList = await getDocs(users);
    const checkUser = usersList.docs.find(user => user.data().registerEmail === data);
    return {...checkUser?.data(),state:true};
})