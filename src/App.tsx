import React from "react";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import UserInfo from "./components/UserInfo";
import ChangePassword from "./components/ChangePassword";
import About from "./components/About";
import Admin from "./components/Admin";
import PrivateRoute from "./app/helperFunctions/PrivateRoute";
import { useAppDispatch } from "./app/store/store";
import { useSelector } from "react-redux";
import { initialStateType } from "./app/reducer/loginSlice";
import { useEffect } from "react";
import { getUser } from "./app/data/actions";
import ErrorPage from "./components/404Page";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  const dispatch = useAppDispatch();
  const { registerEmail } = useSelector(
    (state: initialStateType) => state.userLogin.user
  );

  useEffect(() => {
    const userToken = localStorage.getItem("Auth Token");
    if (userToken && !registerEmail) {
      dispatch(getUser(userToken));
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route path="orders" element={<Orders />} />
            <Route path="admin" element={<Admin />} />
            <Route path="settings" element={<UserInfo />} />
            <Route path="password" element={<ChangePassword />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
