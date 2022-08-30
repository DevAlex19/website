import {
  ProductsHeaderContainer,
  ProductsHeaderTitle,
  SortProductsContainer,
  SortProductsItem,
  SortProductsItems,
  SortProductsSelected,
} from "../styles/CategoriesStyles";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function ProductsHeader() {
  const { pathname } = useLocation();
  const title = pathname
    .split("/")
    [pathname.split("/").length - 1].replaceAll("-", " ");
  const [selected, setSelected] = useState("Cele mai populare");

  return (
    <ProductsHeaderContainer>
      <ProductsHeaderTitle>{title}</ProductsHeaderTitle>
      <SortProductsContainer>
        <SortProductsSelected>{selected}</SortProductsSelected>
        <SortProductsItems>
          {[
            "Cele mai populare",
            "Cele mai vechi",
            "Cele mai noi",
            "Pret crescator",
            "Pret descrescator",
          ].map((item, index) => (
            <SortProductsItem
              onClick={(e: any) => setSelected(e.target.textContent)}
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
