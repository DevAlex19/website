import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getProduct, getProducts } from "../app/data/actions";
import { useAppDispatch } from "../app/store/store";
import BreadCrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";

function ProductPage() {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      getProduct(
        pathname.split("/")[pathname.split("/").length - 1].replaceAll("-", " ")
      )
    );
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
