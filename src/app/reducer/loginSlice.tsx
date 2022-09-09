import { createSlice } from "@reduxjs/toolkit";
import {
  loginUser,
  getUser,
  updateUser,
  addUser,
  getProducts,
  getProduct,
  getOrders,
  getSliderProducts,
  addReview,
  getSearchResults,
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
  cart: any;
  orders: any;
  sliderProducts: any;
  userOrders: any;
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
  cart: [],
  orders: [],
  userOrders: [],
  sliderProducts: [],
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
    addToCart(state, action) {
      const index = state.cart.findIndex(
        (item: any) =>
          item.nume === action.payload.nume && item.size === action.payload.size
      );

      if (index < 0) {
        state.cart = [
          ...state.cart,
          {
            ...action.payload,
            total: action.payload.pret * action.payload.quantity,
          },
        ];
        localStorage.setItem("cart", JSON.stringify(state.cart));
      } else {
        const newState = [...state.cart];
        newState[index].quantity = action.payload.quantity;
        newState[index].total = newState[index].pret * action.payload.quantity;
        state.cart = newState;
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    },
    deleteItem(state, action) {
      const newState = [...state.cart];
      const index = state.cart.findIndex(
        (item: any) =>
          item.nume === action.payload.nume && item.size === action.payload.size
      );
      state.cart = [
        ...newState.slice(0, index),
        ...newState.slice(index + 1, newState.length),
      ];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getCart(state, action) {
      state.cart = action.payload;
    },
    addOrder(state, action) {
      state.orders = action.payload;
    },
    clearCart(state, action) {
      if (action.payload) {
        state.cart = [];
      }
      localStorage.removeItem("cart");
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
    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.userOrders = [...action.payload];
    });
    builder.addCase(getSliderProducts.fulfilled, (state, action) => {
      state.sliderProducts = [...action.payload];
    });
    builder.addCase(getSearchResults.pending, (state, action) => {
      state.products.loading = true;
    });
    builder.addCase(getSearchResults.fulfilled, (state, action) => {
      state.products.list = [...action.payload];
      state.products.loading = false;
    });
  },
});

export const { logOut, addToCart, deleteItem, getCart, addOrder, clearCart } =
  loginSlice.actions;

export default loginSlice.reducer;
