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
import PrivateRoute from "./app/helperFunctions/PrivateRoute";
import { useAppDispatch } from "./app/store/store";
import { useSelector } from "react-redux";
import { getCart, initialStateType } from "./app/reducer/loginSlice";
import { useEffect } from "react";
import { getSliderProducts, getUser } from "./app/data/actions";
import ErrorPage from "./components/404Page";
import ForgotPassword from "./components/ForgotPassword";
import DisplayProducts from "./components/DisplayProducts";
import Checkout from "./components/Checkout";
import SearchPage from "./components/SearchPage";
import ProductPage from "./components/ProductPage";

function App() {
  const dispatch = useAppDispatch();
  const { registerEmail } = useSelector(
    (state: initialStateType) => state.userLogin.user
  );
  const slider = useSelector((state: initialStateType) => state.sliderProducts);

  useEffect(() => {
    const userToken = localStorage.getItem("Auth Token");
    const cart = localStorage.getItem("cart");

    if (userToken && !registerEmail) {
      dispatch(getUser(userToken));
    }
    if (cart) {
      dispatch(getCart(JSON.parse(cart)));
    }
    if (slider.length <= 0) {
      dispatch(getSliderProducts());
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
            <Route path="orders" element={<Orders />}></Route>
            <Route path="settings" element={<UserInfo />} />
            <Route path="password" element={<ChangePassword />} />
          </Route>

          <Route path="/:product" element={<DisplayProducts />}>
            <Route
              path="/:product/:category"
              element={<DisplayProducts />}
            ></Route>
            <Route
              path="/:product/:category/:subcategory"
              element={<DisplayProducts />}
            ></Route>
          </Route>
          <Route path="/p/:productPage" element={<ProductPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/search/:searchValue" element={<SearchPage />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
