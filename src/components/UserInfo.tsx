import React from "react";
import {
  InputContainer,
  Label,
  UserInfoContainer,
  Input,
  Form,
  SaveBtn,
} from "../styles/UserInfoStyles";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
import { updateUser } from "../app/data/actions";

function UserInfo() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { registerEmail, phone, firstName, lastName, address, town, city } =
    useSelector((state: initialStateType) => state.userLogin.user);
  const dispatch = useAppDispatch();
  const id = localStorage.getItem("Auth Token") || "";

  function onSubmit(data: any) {
    if (
      (data.phone && data.phone !== phone) ||
      (data.firstName && data.firstName !== firstName) ||
      (data.lastName && data.lastName !== lastName) ||
      (data.address && data.address !== address) ||
      (data.city && data.city !== city) ||
      (data.town && data.town !== town)
    ) {
      dispatch(updateUser({ ...data, id }));
    }
  }
  return (
    <UserInfoContainer>
      <p>Date utilizator</p>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <InputContainer>
            <Label>Adresa de e-mail</Label>
            <Input defaultValue={registerEmail} disabled />
          </InputContainer>
          <InputContainer>
            <Label>Numar telefon</Label>
            <Input defaultValue={phone} {...register("phone")} />
          </InputContainer>
        </div>
        <div className="inputs">
          <InputContainer>
            <Label>Nume</Label>
            <Input
              defaultValue={firstName}
              {...register("firstName", {
                required: "First name is required.",
              })}
            />
            <p
              style={{ color: "red", marginTop: "0.5rem", fontSize: "0.9rem" }}
            >
              {errors?.firstName?.message as string}
            </p>
          </InputContainer>
          <InputContainer>
            <Label>Prenume</Label>
            <Input
              defaultValue={lastName}
              {...register("lastName", { required: "Last name is required." })}
            />
            <p
              style={{ color: "red", marginTop: "0.5rem", fontSize: "0.9rem" }}
            >
              {errors?.firstName?.message as string}
            </p>
          </InputContainer>
        </div>
        <div className="inputs">
          <InputContainer>
            <Label>Adresa</Label>
            <Input defaultValue={address} {...register("address")} />
          </InputContainer>
          <InputContainer>
            <Label>Localitate</Label>
            <Input defaultValue={town} {...register("town")} />
          </InputContainer>
        </div>
        <InputContainer>
          <Label>Judet</Label>
          <Input defaultValue={city} {...register("city")} />
        </InputContainer>
        <SaveBtn>Salveaza</SaveBtn>
      </Form>
    </UserInfoContainer>
  );
}

export default UserInfo;
