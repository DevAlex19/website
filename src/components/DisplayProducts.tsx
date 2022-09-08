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
  filters?: any;
  setFilters?: any;
};

function DisplayProducts() {
  const { pathname } = useLocation();
  const [filtersMenu, setFiltersMenu] = useState(false);
  const searchParam = pathname.split("/").filter((i) => i);
  const [filters, setFilters] = useState({
    dimensiune: [],
    producator: [],
    colors: [],
    price: { min: 0, max: 100 },
    sort: "cele mai populare",
  });
  const dispatch = useAppDispatch();

  const { loading, list } = useSelector(
    (state: initialStateType) => state.products
  );

  useEffect(() => {
    dispatch(getProducts(searchParam));
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
      {list.length > 0 ? (
        <ProductsContainer>
          <ProductsHeader
            filtersMenu={filtersMenu}
            setFiltersMenu={setFiltersMenu}
            filters={filters}
            setFilters={setFilters}
          />
          <Categories />
          <ProductsSection>
            <FilterProducts
              filtersMenu={filtersMenu}
              setFiltersMenu={setFiltersMenu}
              filters={filters}
              setFilters={setFilters}
            />
            {loading ? <Loader /> : <Products filters={filters} />}
          </ProductsSection>
        </ProductsContainer>
      ) : (
        <div
          style={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.5rem",
          }}
        >
          Produsele nu sunt disponibile
        </div>
      )}

      <Footer />
    </>
  );
}

export default DisplayProducts;
