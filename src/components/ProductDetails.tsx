import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
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
  const product = useSelector(
    (state: initialStateType) => state.products.product
  );

  return (
    <>
      <ProductSection>
        <ProductName>{product[0] && product[0].nume}</ProductName>
        <ProductPrice>{product[0] && product[0].pret} lei</ProductPrice>
        <Rating />

        <ProductSizeContainer>
          <ProductSizeTitle>Dimensiune:</ProductSizeTitle>
          <ProductSizeItem>
            {product[0] &&
              product[0].marimi.map((item: any, index: number) => {
                return (
                  <ProductSize
                    color={sizes.size.includes(item.marime) ? "true" : "false"}
                    key={index}
                    onClick={() => {
                      if (sizes.error) {
                        setSizes({
                          ...sizes,
                          size: !sizes.size.includes(item.marime)
                            ? [...sizes.size, item.marime]
                            : sizes.size,
                          error: false,
                        });
                        return;
                      }

                      setSizes({
                        ...sizes,
                        size: !sizes.size.includes(item.marime)
                          ? [...sizes.size, item.marime]
                          : sizes.size,
                      });
                    }}
                  >
                    {item.marime}
                  </ProductSize>
                );
              })}
          </ProductSizeItem>
        </ProductSizeContainer>

        <ProductButtonContainer
          onClick={() => {
            if (sizes.size.length <= 0) {
              setSizes({ ...sizes, error: true });
            } else {
              setSizes({ ...sizes, error: false });
              setAddCartModal(true);
            }
          }}
        >
          <ProductButtonSection error={sizes.error}>
            <ProductButton>Adauga in cos</ProductButton>
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
