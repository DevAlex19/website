import React from "react";
import {useLocation } from "react-router-dom";
import { DashboardContainer } from "../styles/DashboardStyles";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";
import UserInfo from "./UserInfo";
import UserSettings from "./UserSettings";


function UserDashboard(){
    const location = useLocation();

    return <DashboardContainer>
        <UserSettings/>
       {location.pathname.includes('orders') ? <Orders/> : null}
       {location.pathname.includes('settings') ? <UserInfo/> : null}
       {location.pathname.includes('password') ? <ChangePassword/> : null}
    </DashboardContainer>
}

export default UserDashboard;