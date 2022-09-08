import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
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
  QuantityContainer,
  QuantityBtn,
  QuantityInput,
  BtnsSection,
} from "../styles/ProductStyles";
import ProductModal from "./ProductModal";
import Rating from "./Rating";

function ProductDetails() {
  const [sizes, setSizes] = useState<any>({ size: "", error: true });
  const [addCartModal, setAddCartModal] = useState(false);
  const product = useSelector(
    (state: initialStateType) => state.products.product
  );
  const { register, setValue, watch } = useForm();
  const dispatch = useAppDispatch();
  const cart = useSelector((state: initialStateType) => state.cart);
  let rating = 0;
  if (product[0]) {
    rating =
      product[0].review.reduce((res: number, acc: any) => {
        return res + acc.rating;
      }, 0) / product[0].review.length || 0;
  }
  return (
    <>
      <ProductSection>
        <ProductName>{product[0] && product[0].nume}</ProductName>
        <ProductPrice>{product[0] && product[0].pret} lei</ProductPrice>
        <Rating rating={rating} />
        <ProductSizeContainer>
          <ProductSizeTitle>Dimensiune:</ProductSizeTitle>
          <ProductSizeItem>
            {product[0] &&
              product[0].marimi.map((item: any, index: number) => {
                return (
                  <ProductSize
                    color={sizes.size === item.marime ? "true" : "false"}
                    key={index}
                    onClick={() => {
                      if (sizes.error) {
                        setSizes({
                          ...sizes,
                          size: item.marime,
                          error: false,
                        });
                        return;
                      }

                      setSizes({
                        ...sizes,
                        size: item.marime,
                      });
                    }}
                  >
                    {item.marime}
                  </ProductSize>
                );
              })}
          </ProductSizeItem>
        </ProductSizeContainer>
        <BtnsSection>
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
              <ProductButton
                onClick={() => {
                  dispatch(
                    addToCart({
                      ...product[0],
                      quantity: +watch().quantity <= 1 ? 1 : +watch().quantity,
                      size: sizes.size,
                    })
                  );
                }}
              >
                Adauga in cos
              </ProductButton>
              <ProductButton>Selecteaza marimea</ProductButton>
            </ProductButtonSection>
          </ProductButtonContainer>
          <QuantityContainer>
            <QuantityBtn
              onClick={() => {
                if (+watch().quantity === 1) {
                  return;
                }
                setValue("quantity", +watch().quantity - 1);
              }}
            >
              -
            </QuantityBtn>
            <QuantityInput
              type="number"
              {...register("quantity")}
              defaultValue="1"
            />
            <QuantityBtn
              onClick={() => {
                setValue("quantity", +watch().quantity + 1);
              }}
            >
              +
            </QuantityBtn>
          </QuantityContainer>
        </BtnsSection>
      </ProductSection>
      <ProductModal
        addCartModal={addCartModal}
        setAddCartModal={setAddCartModal}
        sizes={sizes.size}
        quantity={+watch().quantity}
      />
    </>
  );
}

export default ProductDetails;
