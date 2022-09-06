import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getProducts } from "../app/data/actions";
import { initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
import { ProductsContainer, ProductsSection } from "../styles/CategoriesStyles";
import BreadCrumb from "./Breadcrumb";
import Categories from "./Categories";
import FilterProducts from "./FilterProducts";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
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
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state: initialStateType) => state.products);

  useEffect(() => {
    dispatch(getProducts(searchParam)).then((res: any) => {
      if (res.payload.length === 0) {
        navigate("/error");
      }
    });
  }, [pathname]);

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
          {loading ? <Loader /> : <Products />}
        </ProductsSection>
      </ProductsContainer>

      <Footer />
    </>
  );
}

export default DisplayProducts;
