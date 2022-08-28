import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import {
  Input,
  InputContainer,
  Label,
  PasswordContainer,
  PasswordIcon,
  SaveBtn,
} from "../styles/ChangePasswordstyles";
import { updateUser } from "../app/data/actions";
import { initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";

type PasswordInputs = {
  newPassword?: string;
  confirmPassword?: string;
};

function ChangePassword() {
  const [show, setShow] = useState([false, false, false]);
  const id = localStorage.getItem("Auth Token") || "";
  const { registerPassword, registerEmail } = useSelector(
    (state: initialStateType) => state.userLogin.user
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const passwordRegex =
    /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,}$/;
  const dispatch = useAppDispatch();

  function showPassword(index: number) {
    const arr = [...show];
    arr[index] = !show[index];
    setShow(arr);
  }
  function onSubmit(data: PasswordInputs) {
    const { newPassword } = data;

    if (newPassword && newPassword !== registerPassword) {
      dispatch(updateUser({ registerEmail, newPassword, id }));
    }
  }
  return (
    <PasswordContainer>
      <p>Schimbare parola</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>Parola</Label>
          <Input
            defaultValue={registerPassword}
            disabled
            type={show[0] ? "text" : "password"}
          />
          <PasswordIcon
            onClick={() => showPassword(0)}
            icon={show[0] ? faEyeSlash : faEye}
          />
        </InputContainer>
        <InputContainer>
          <Label>Noua Parola</Label>
          <Input
            {...register("newPassword", {
              pattern: {
                value: passwordRegex,
                message:
                  "The password must be at least 6 characters and contain at least 1 uppercase character and 1 special character.",
              },
            })}
            type={show[1] ? "text" : "password"}
          />
          <PasswordIcon
            onClick={() => showPassword(1)}
            icon={show[1] ? faEyeSlash : faEye}
          />
          <p style={{ color: "red", marginTop: "0.5rem", fontSize: "0.9rem" }}>
            {errors?.newPassword?.message as string}
          </p>
        </InputContainer>
        <InputContainer>
          <Label>Confirma Noua Parola</Label>
          <Input
            {...register("confirmPassword", {
              validate: (value) => {
                const password = watch().newPassword;
                return value === password || "Parolele sunt diferite.";
              },
            })}
            type={show[2] ? "text" : "password"}
          />
          <PasswordIcon
            onClick={() => showPassword(2)}
            icon={show[2] ? faEyeSlash : faEye}
          />
          <p style={{ color: "red", marginTop: "0.5rem", fontSize: "0.9rem" }}>
            {errors?.confirmPassword?.message as string}
          </p>
        </InputContainer>
        <SaveBtn>Salveaza</SaveBtn>
      </form>
    </PasswordContainer>
  );
}

export default ChangePassword;
