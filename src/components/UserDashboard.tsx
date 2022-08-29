import React from "react";
import { useLocation } from "react-router-dom";
import { DashboardContainer } from "../styles/DashboardStyles";
import ChangePassword from "./ChangePassword";
import Orders from "./Orders";
import UserInfo from "./UserInfo";
import UserSettings from "./UserSettings";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
import Loader from "./Loader";

function UserDashboard() {
  const location = useLocation();
  const { loading } = useSelector((state: initialStateType) => state.userLogin);

  return (
    <DashboardContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserSettings />
          {location.pathname.includes("orders") ? <Orders /> : null}
          {location.pathname.includes("settings") ? <UserInfo /> : null}
          {location.pathname.includes("password") ? <ChangePassword /> : null}
        </>
      )}
    </DashboardContainer>
  );
}

export default UserDashboard;
