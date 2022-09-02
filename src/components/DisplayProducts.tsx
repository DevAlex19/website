import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ProductsContainer, ProductsSection } from "../styles/CategoriesStyles";
import BreadCrumb from "./Breadcrumb";
import Categories from "./Categories";
import FilterProducts from "./FilterProducts";
import Footer from "./Footer";
import Header from "./Header";
import Products from "./Products";
import ProductsHeader from "./ProductsHeader";

export type FiltersMenuType = {
  filtersMenu: boolean;
  setFiltersMenu: any;
};

function DisplayProducts() {
  const { pathname } = useLocation();
  const [filtersMenu, setFiltersMenu] = useState(false);
  const searchParam = pathname.split("/").filter((i) => i);

  useEffect(() => {
    function closeFilterMenu() {
      if (window.innerWidth >= 860) {
        setFiltersMenu(false);
      }
    }

    window.addEventListener("resize", closeFilterMenu);
    return () => window.removeEventListener("resize", closeFilterMenu);
  }, []);

  return (
    <>
      <Header />
      {searchParam.includes("search") ? null : <BreadCrumb path={pathname} />}
      <ProductsContainer>
        <ProductsHeader
          filtersMenu={filtersMenu}
          setFiltersMenu={setFiltersMenu}
        />
        <Categories />
        <ProductsSection>
          <FilterProducts
            filtersMenu={filtersMenu}
            setFiltersMenu={setFiltersMenu}
          />
          <Products />
        </ProductsSection>
      </ProductsContainer>
      <Footer />
    </>
  );
}

export default DisplayProducts;
