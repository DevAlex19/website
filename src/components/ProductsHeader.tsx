import {
  BtnsContainer,
  FiltersButton,
  ProductsHeaderContainer,
  ProductsHeaderTitle,
  SortProductsArrow,
  SortProductsContainer,
  SortProductsItem,
  SortProductsItems,
  SortProductsSelected,
} from "../styles/CategoriesStyles";
import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  faArrowDownWideShort,
  faArrowRightArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FiltersMenuType } from "./DisplayProducts";

function ProductsHeader({ filtersMenu, setFiltersMenu }: FiltersMenuType) {
  const { pathname } = useLocation();
  const param = useParams();
  const title = pathname
    .split("/")
    [pathname.split("/").length - 1].replaceAll("-", " ");
  const searchParam = pathname.split("/").filter((i) => i);
  const [selected, setSelected] = useState("Cele mai populare");
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    function closeModal(e: any) {
      if (dropdown && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("click", closeModal);
    return () => document.removeEventListener("click", closeModal);
  }, [dropdown]);

  return (
    <ProductsHeaderContainer>
      <ProductsHeaderTitle>
        {searchParam.includes("search")
          ? `REZULTATELE CAUTARII: ${
              param.searchValue ? param.searchValue : ""
            }`
          : title}
      </ProductsHeaderTitle>
      <BtnsContainer>
        <SortProductsContainer ref={ref}>
          <SortProductsSelected
            className={dropdown ? "open" : ""}
            onClick={() => setDropdown(true)}
          >
            {selected}
          </SortProductsSelected>
          <SortProductsArrow icon={faArrowRightArrowLeft} />
          <SortProductsItems dropdown={dropdown}>
            {[
              "Cele mai populare",
              "Cele mai vechi",
              "Cele mai noi",
              "Pret crescator",
              "Pret descrescator",
            ].map((item, index) => (
              <SortProductsItem
                onClick={(e: any) => {
                  setSelected(e.target.textContent);
                  setDropdown(false);
                }}
                key={index}
              >
                {item}
              </SortProductsItem>
            ))}
          </SortProductsItems>
        </SortProductsContainer>
        <FiltersButton onClick={() => setFiltersMenu(!filtersMenu)}>
          Filters
          <FontAwesomeIcon icon={faArrowDownWideShort} />
        </FiltersButton>
      </BtnsContainer>
    </ProductsHeaderContainer>
  );
}

export default ProductsHeader;
