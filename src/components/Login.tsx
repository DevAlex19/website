import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";

function Login() {
  if (localStorage.getItem("Auth Token")) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;
