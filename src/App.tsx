import React from 'react';
import './style.css';
import { BrowserRouter,Routes,Route, Navigate, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { useAuthContext } from "./components/useAuthContext";
import { useSelector } from 'react-redux';
import { initialStateType } from './components/loginSlice';

function App() {
  const {state} = useSelector((state:initialStateType)=>state.userLogin);
  
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            {<Route path='/login' element={!state ? <Login/> : <Navigate to='/'/>}/>}
          </Routes>
        </BrowserRouter>
    </>
  );
}
    
export default App;
