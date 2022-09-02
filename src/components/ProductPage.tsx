import { useLocation } from "react-router-dom";
import BreadCrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import Product from "./Product";

function ProductPage() {
  const { pathname } = useLocation();
  return (
    <>
      <Header />
      <BreadCrumb path={pathname} />
      <Product />
      <Footer />
    </>
  );
}

export default ProductPage;
