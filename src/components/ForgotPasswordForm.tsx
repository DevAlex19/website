import { useState } from "react";
import {
  ForgotPasswordBtn,
  ForgotPasswordContainer,
  ForgotPasswordInput,
  ForgotPasswordInputWrapper,
  ForgotPasswordLabel,
  ForgotPasswordMessage,
  ForgotPasswordModal,
  ForgotPasswordTitle,
} from "../styles/ForgotPasswordStyles";
import { useForm } from "react-hook-form";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebaseConfig";
const actionCodeSettings = {
  url: "https://www.example.com/checkout?cartId=1234",
  // This must be true for email link sign-in.

  // FDL custom domain.
  dynamicLinkDomain: "coolapp.page.link",
};
function ForgotPasswordForm() {
  const [focus, setFocus] = useState(false);
  const [message, setMessage] = useState("");
  const { register, watch } = useForm();
  const inputs = watch();
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  async function resetPassword() {
    if (!inputs.email) {
      setMessage("Email is required.");
      return;
    }
    if (!emailRegex.test(inputs.email)) {
      setMessage("Email is invalid.");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, inputs.email);
      setMessage(
        "Please check your email and click on the provided link to reset your password."
      );
    } catch (e) {
      setMessage("Couldn't find your account");
    }
  }

  return (
    <ForgotPasswordModal>
      <ForgotPasswordContainer>
        <ForgotPasswordTitle>Ai uitat parola?</ForgotPasswordTitle>
        <ForgotPasswordInputWrapper>
          <ForgotPasswordLabel className={focus || inputs.email ? "focus" : ""}>
            Email
          </ForgotPasswordLabel>
          <ForgotPasswordInput
            type="text"
            {...register("email")}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
          />
        </ForgotPasswordInputWrapper>

        <ForgotPasswordBtn onClick={resetPassword}>Trimite</ForgotPasswordBtn>
        <ForgotPasswordMessage
          style={{ color: message.includes("link") ? "green" : "#e32636" }}
        >
          {message}
        </ForgotPasswordMessage>
      </ForgotPasswordContainer>
    </ForgotPasswordModal>
  );
}

export default ForgotPasswordForm;
