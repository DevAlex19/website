import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  ProductName,
  ProductSection,
  ProductPrice,
  ProductSizeContainer,
  ProductButton,
  ProductSizeTitle,
  ProductSizeItem,
  ProductSize,
  ProductButtonContainer,
  ProductButtonSection,
} from "../styles/ProductStyles";
import ProductModal from "./ProductModal";
import Rating from "./Rating";

function ProductDetails() {
  const [sizes, setSizes] = useState<any>({ size: [], error: false });
  const [addCartModal, setAddCartModal] = useState(false);
  return (
    <>
      <ProductSection>
        <ProductName>PUMA FUTURE Z 1.4 MXSG</ProductName>
        <ProductPrice>784 lei</ProductPrice>
        <Rating />
        <ProductSizeContainer>
          <ProductSizeTitle>Dimensiune:</ProductSizeTitle>
          <ProductSizeItem>
            <ProductSize
              onClick={() => {
                if (sizes.error) {
                  setSizes({ ...sizes, size: ["22"], error: false });
                  return;
                }
                setSizes({ ...sizes, size: ["22"] });
              }}
            >
              22
            </ProductSize>
            <ProductSize color={sizes.error ? "red" : "#a0a8b2"}>
              22
            </ProductSize>
            <ProductSize>22</ProductSize>
            <ProductSize>22</ProductSize>
            <ProductSize>22</ProductSize>
          </ProductSizeItem>
        </ProductSizeContainer>
        <ProductButtonContainer
          onClick={() => {
            if (sizes.size.length <= 0) {
              setSizes({ ...sizes, error: true });
            }
          }}
          onMouseOver={() => {}}
        >
          <ProductButtonSection error={sizes.error}>
            <ProductButton
              onClick={() => !sizes.error && setAddCartModal(true)}
            >
              Adauga in cos
            </ProductButton>
            <ProductButton>Selecteaza marimea</ProductButton>
          </ProductButtonSection>
        </ProductButtonContainer>
      </ProductSection>
      <ProductModal
        addCartModal={addCartModal}
        setAddCartModal={setAddCartModal}
      />
    </>
  );
}

export default ProductDetails;
