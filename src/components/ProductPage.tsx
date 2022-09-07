import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { getProduct, getProducts } from "../app/data/actions";
import { initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
import BreadCrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";

function ProductPage() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(
      getProduct(
        pathname.split("/")[pathname.split("/").length - 1].replaceAll("-", " ")
      )
    ).then((res: any) => {
      if (res.payload.length <= 0) {
        navigate("/error");
      }
    });
  }, []);
  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

export default ProductPage;
