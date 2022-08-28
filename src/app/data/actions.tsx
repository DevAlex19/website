import { createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebaseConfig";
import {collection,addDoc,getDocs,doc,updateDoc} from 'firebase/firestore';
import { addUserType } from "../../components/RegisterForm";
import { Inputs } from "../../components/LoginForm";
import { userLoginType } from "../reducer/loginSlice";


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
    const checkUser = usersList.docs.find(user =>  user.data().registerEmail === data);
    return {...checkUser?.data(),state:true,id:checkUser?.id};
})

export const updateUser = createAsyncThunk('login/updateUser',async(data:any)=>{
  const {id,newPassword,firstName,lastName,town,city,phone,address} = data;
  const user = doc(db,'users',id);
  if(newPassword){
    await updateDoc(user,{registerPassword:newPassword});
    return {registerPassword:newPassword};
  }
    await updateDoc(user,{
      firstName,
      lastName,
      town,
      city,
      phone,
      address,
  });
  return {
    firstName,
    lastName,
    town,
    city,
    phone,
    address,
}
})
 
