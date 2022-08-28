import { faBoxOpen, faKey, faUser,faGear, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Avatar, Divide,CloseBtn, Icon, LinkContainer, LogOut, MobileMenu, SettingsContainer, UserAvatarContainer } from "../styles/DashboardStyles";
import { initialStateType, logOut } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";

function UserSettings(){
   const navigation = useNavigate();
   const [menu,setMenu] = useState(false);
   const dispatch = useAppDispatch();
   const {registerEmail} = useSelector((state:initialStateType) => state.userLogin);


    return <SettingsContainer open={menu}>
        <CloseBtn open={menu} onClick={()=>setMenu(false)}icon={faX}/>
        <MobileMenu onClick={()=>setMenu(true)}>
            <Icon icon={faBars}/>
            <p>Meniu utilizator</p>
        </MobileMenu>
        <div className='settings'>
            <UserAvatarContainer>
                <Avatar icon={faUser}></Avatar>
                <p>{registerEmail}</p>
            </UserAvatarContainer>
            <LinkContainer onClick={()=>{
                setMenu(false);
                navigation('/dashboard/orders')}
            } className='mt'>
                <Icon icon={faBoxOpen}></Icon>
                <p>Comenzile mele</p>
            </LinkContainer>
            <LinkContainer onClick={()=>{
                setMenu(false);
                navigation('/dashboard/settings')}
            }>
                <Icon icon={faGear}></Icon>
                <p>Date utilizator</p>
            </LinkContainer>
            <LinkContainer onClick={()=>{
                 setMenu(false);
                 navigation('/dashboard/password');
            }} className='mb'>
                <Icon icon={faKey}></Icon>
                <p>Schimbare parola</p>
            </LinkContainer>
           <Divide/>
            <LogOut onClick={()=>{
                dispatch(logOut());
                navigation('/')}
            }>Deconectare</LogOut>
        </div>
       
    </SettingsContainer>
}

export default UserSettings;