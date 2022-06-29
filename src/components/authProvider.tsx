import {useState,useEffect} from 'react';
import AuthContext from './authContext';
import { useAppDispatch } from './store';
import { getUser } from './actions';
import { useSelector } from 'react-redux';
import { initialStateType } from './loginSlice';

export const AuthProvider = ({children}:any) =>{
    const [user,setUser] = useState('');
    const loginState = useSelector((state:initialStateType)=>state.userLogin.state);
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const currentUser = localStorage.getItem('user');
        if(currentUser && !loginState){
            dispatch(getUser(currentUser));
            setUser(currentUser || '');
          }
    },[user])
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}