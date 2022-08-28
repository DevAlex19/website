import { createSlice } from "@reduxjs/toolkit";
import { loginUser, getUser, updateUser, addUser } from "../data/actions";

export type userType = {
  firstName?: string;
  lastName?: string;
  registerEmail?: string;
  registerPassword?: string;
  town?: string;
  city?: string;
  phone?: string;
  address?: string;
  id?: string;
};
export type userLoginType = {
  user: userType;
  loading: boolean;
};

export interface initialStateType {
  userLogin: userLoginType;
}

const initialState: initialStateType = {
  userLogin: {
    loading: false,
    user: {
      firstName: "",
      lastName: "",
      registerEmail: "",
      town: "",
      city: "",
      phone: "",
      address: "",
      id: "",
    },
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut(state) {
      state.userLogin.user = {
        firstName: "",
        lastName: "",
        registerEmail: "",
        registerPassword: "",
        town: "",
        city: "",
        phone: "",
        address: "",
        id: "",
      };

      localStorage.removeItem("Auth Token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state, action) => {
      state.userLogin.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.userLogin.user = { ...state.userLogin.user, ...action.payload };
      state.userLogin.loading = false;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.userLogin.loading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userLogin.user = { ...state.userLogin.user, ...action.payload };
      state.userLogin.loading = false;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.userLogin.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userLogin.user = { ...state.userLogin.user, ...action.payload };
      state.userLogin.loading = false;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.userLogin = { ...state.userLogin, ...action.payload };
    });
  },
});

export const { logOut } = loginSlice.actions;

export default loginSlice.reducer;
