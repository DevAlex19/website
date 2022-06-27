import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from './loginSlice';
import thunk from 'redux-thunk';
import { useDispatch } from "react-redux";


const store = configureStore({
    reducer:loginSlice
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch:() => AppDispatch = useDispatch;
export default store;