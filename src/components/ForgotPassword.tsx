import { Navigate } from "react-router-dom";
import Footer from "./Footer";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Header from "./Header";

function ForgotPassword() {
  if (localStorage.getItem("Auth Token")) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <ForgotPasswordForm />
      <Footer />
    </>
  );
}

export default ForgotPassword;
