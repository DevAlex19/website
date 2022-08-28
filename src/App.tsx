import React from 'react';
import './style.css';
import { BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { useSelector } from 'react-redux';
import { initialStateType } from './app/reducer/loginSlice';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import UserInfo from './components/UserInfo';
import ChangePassword from './components/ChangePassword';
import About from './components/About';
import Admin from './components/Admin';


function App() {
  const {state} = useSelector((state:initialStateType)=>state.userLogin);
  
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={!state ? <Login/> : <Navigate to='/'/>}/>
            <Route path='/dashboard' element={state ? <Dashboard/> : <Navigate to='/'/>}>
              <Route path='orders' element={<Orders/>}/>
              <Route path='admin' element={<Admin/>}/>
              <Route path='settings' element={<UserInfo/>}/>
              <Route path='password' element={<ChangePassword/>}/>
            </Route>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}
    
export default App;
