import { configureStore } from "@reduxjs/toolkit";
import loginSlice from '../reducer/loginSlice';
import { useDispatch } from "react-redux";


const store = configureStore({
    reducer:loginSlice
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch:() => AppDispatch = useDispatch;
export default store;