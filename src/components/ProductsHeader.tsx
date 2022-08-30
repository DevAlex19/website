import {
  ProductsHeaderContainer,
  ProductsHeaderTitle,
  SortProductsArrow,
  SortProductsContainer,
  SortProductsItem,
  SortProductsItems,
  SortProductsSelected,
} from "../styles/CategoriesStyles";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

function ProductsHeader() {
  const { pathname } = useLocation();
  const title = pathname
    .split("/")
  [pathname.split("/").length - 1].replaceAll("-", " ");
  const [selected, setSelected] = useState("Cele mai populare");
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    function closeModal(e: any) {
      if (dropdown && !ref.current.contains(e.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener('click', closeModal);
    return () => document.removeEventListener('click', closeModal);
  }, [dropdown])

  return (
    <ProductsHeaderContainer>
      <ProductsHeaderTitle>{title}</ProductsHeaderTitle>
      <SortProductsContainer ref={ref}>
        <SortProductsSelected className={dropdown ? 'open' : ''} onClick={() => setDropdown(true)}>{selected}</SortProductsSelected>
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
                setSelected(e.target.textContent)
                setDropdown(false)
              }}
              key={index}
            >
              {item}
            </SortProductsItem>
          ))}
        </SortProductsItems>
      </SortProductsContainer>
    </ProductsHeaderContainer>
  );
}

export default ProductsHeader;
