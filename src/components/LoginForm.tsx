import React, { useState } from "react";
import { LoginContainer } from "../styles/LoginStyles";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";

export interface Inputs {
  loginEmail?: string;
  loginPassword?: string;
}

export type Form = {
  focus: any;
  setFocus: (focus: any) => void;
  openLogin: any;
  setLogin: any;
};

function LoginForm() {
  const [openLogin, setLogin] = useState({ login: true, register: false });
  const [focus, setFocus] = useState({
    loginEmail: false,
    loginPassword: false,
    registerEmail: false,
    firstName: false,
    lastName: false,
    registerPassword: false,
  });

  return (
    <LoginContainer>
      <SignInForm
        setFocus={setFocus}
        focus={focus}
        openLogin={openLogin}
        setLogin={setLogin}
      />
      <RegisterForm
        setFocus={setFocus}
        focus={focus}
        openLogin={openLogin}
        setLogin={setLogin}
      ></RegisterForm>
    </LoginContainer>
  );
}

export default LoginForm;
