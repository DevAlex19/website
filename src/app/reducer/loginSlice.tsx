import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  getUser,
  updateUser,
  addUser,
  getProducts,
  getProduct,
} from "../data/actions";

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
export type productsType = {
  list: any;
  loading: boolean;
  product: any;
};

export interface initialStateType {
  userLogin: userLoginType;
  products: productsType;
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
  products: {
    loading: false,
    list: [],
    product: [],
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
    builder.addCase(getProducts.pending, (state, action) => {
      state.products.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products.list = [...action.payload];
      state.products.loading = false;
    });
    builder.addCase(getProduct.pending, (state, action) => {
      state.products.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.products.loading = false;
      state.products.product = [...action.payload];
    });
  },
});

export const { logOut } = loginSlice.actions;

export default loginSlice.reducer;
