import { useLocation } from "react-router-dom";
import { ProductsContainer, ProductsSection } from "../styles/CategoriesStyles";
import BreadCrumb from "./Breadcrumb";
import Categories from "./Categories";
import FilterProducts from "./FilterProducts";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import ProductsHeader from "./ProductsHeader";
import ProductsList from "./ProductsList";

function DisplayProducts() {
  const { pathname } = useLocation();

  return (
    <>
      <Header />
      <BreadCrumb path={pathname} />
      <ProductsContainer>
        <ProductsHeader />
        <Categories />
        <ProductsSection>
          <FilterProducts />
          <Products />
        </ProductsSection>
      </ProductsContainer>
      <Footer />
    </>
  );
}

export default DisplayProducts;
