import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
import {
  CartItemsContainer,
  CartItemsTitle,
  CartPageContainer,
  TotalPriceContainer,
  CartItemContainer,
  CartItemSection,
  CartItemImage,
  CartItemDetails,
  CartItemTitle,
  CartItemSize,
  CartItemPriceContainer,
  CartItemInputContainer,
  CartItemButton,
  CartItemInput,
  CartItemPriceSection,
  CartItemPrice,
  CartDeleteItem,
  CartDeleteIcon,
  TotalPrice,
  MainButton,
  TotalPriceSection,
  BackButton,
} from "../styles/CartPageStyles";
import { CartDivider } from "../styles/CartStyles";
import { CheckoutHeader } from "./CheckoutHeader";

function CartPage({ page, setPage }: CheckoutHeader) {
  const navigate = useNavigate();
  const { cart } = useSelector((state: initialStateType) => state);
  const totalPrice = cart.reduce((res: any, acc: any) => {
    return res + +acc.total;
  }, 0);
  const { register, setValue, watch } = useForm();
  const dispatch = useAppDispatch();

  return (
    <CartPageContainer>
      <CartItemsContainer>
        <CartItemsTitle>Continutul cosului</CartItemsTitle>
        <CartDivider />
        {cart.map((item: any, index: number) => {
          return (
            <CartItemContainer key={index}>
              <CartItemSection>
                <CartItemImage src={item.imagine} />
                <CartItemDetails>
                  <CartItemTitle>{item.nume}</CartItemTitle>
                  <CartItemSize>Marime: {item.size}</CartItemSize>
                </CartItemDetails>
              </CartItemSection>
              <CartItemPriceContainer>
                <CartItemInputContainer>
                  <CartItemButton
                    onClick={() => {
                      if (+watch()[`${item.nume.slice(0, 9)}`] <= 1) {
                        return;
                      }
                      setValue(
                        `${item.nume.slice(0, 9)}`,
                        +watch()[`${item.nume.slice(0, 9)}`] - 1
                      );
                      dispatch(
                        addToCart({
                          ...item,
                          quantity:
                            +watch()[`${item.nume.slice(0, 9)}`] <= 0
                              ? 0
                              : +watch()[`${item.nume.slice(0, 9)}`],
                        })
                      );
                    }}
                  >
                    -
                  </CartItemButton>
                  <CartItemInput
                    type="number"
                    {...register(`${item.nume.slice(0, 9)}`)}
                    defaultValue={item.quantity}
                  />
                  <CartItemButton
                    onClick={() => {
                      setValue(
                        `${item.nume.slice(0, 9)}`,
                        +watch()[`${item.nume.slice(0, 9)}`] + 1
                      );
                      dispatch(
                        addToCart({
                          ...item,
                          quantity:
                            +watch()[`${item.nume.slice(0, 9)}`] <= 0
                              ? 0
                              : +watch()[`${item.nume.slice(0, 9)}`],
                        })
                      );
                    }}
                  >
                    +
                  </CartItemButton>
                </CartItemInputContainer>
                <CartItemPriceSection>
                  <CartItemPrice>{item.total} lei</CartItemPrice>
                  <CartDeleteItem>
                    <CartDeleteIcon icon={faTrashCan} />
                  </CartDeleteItem>
                </CartItemPriceSection>
              </CartItemPriceContainer>
            </CartItemContainer>
          );
        })}
      </CartItemsContainer>
      <TotalPriceContainer>
        <TotalPriceSection>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Total:</p>
            <TotalPrice>{totalPrice} Lei</TotalPrice>
          </div>
          <MainButton
            onClick={() =>
              setPage({ ...page, value: 1, pages: ["cos", "date contact"] })
            }
          >
            Continua
          </MainButton>
        </TotalPriceSection>
        <BackButton onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} /> Inapoi la magazin
        </BackButton>
      </TotalPriceContainer>
    </CartPageContainer>
  );
}

export default CartPage;
