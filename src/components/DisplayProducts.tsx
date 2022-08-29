import { useParams,useLocation } from "react-router-dom";
import BreadCrumb from "./Breadcrumb";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";

function DisplayProducts() {
  const {pathname} = useLocation();
  
  return (
    <>
      <Header />
      <BreadCrumb path={pathname}/>
      <Products/>
      <Footer />
    </>
  );
}

export default DisplayProducts;
