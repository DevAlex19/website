import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOrder } from "../app/data/actions";
import {
  addToCart,
  clearCart,
  initialStateType,
} from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
import { CartPageContainer } from "../styles/CartPageStyles";
import { CartDivider } from "../styles/CartStyles";
import {
  CheckoutDetailsButton,
  CheckoutDetailsContainer,
  CheckoutDetailsInfo,
  CheckoutDetailsRow,
  CheckoutDetailsSection,
  CheckoutDetailsTitle,
  CheckoutItemDetails,
  CheckoutItemImage,
  CheckoutItemName,
  CheckoutItemPrice,
  CheckoutItems,
  CheckoutItemsContainer,
  CheckoutItemSection,
  CheckoutItemSize,
  CheckoutItemsSection,
  CheckoutItemsTitle,
  CheckoutItemsTotalContainer,
  SendOrder,
} from "../styles/CheckoutFinalStyles";
import { CheckoutHeader } from "./CheckoutHeader";

function CheckoutFinal({ page, setPage }: CheckoutHeader) {
  const navigate = useNavigate();
  const {
    cart,
    orders: { name, address, code, county, email, phone, town },
  } = useSelector((state: initialStateType) => state);
  const totalPrice = cart.reduce((res: any, acc: any) => {
    return res + +acc.total;
  }, 0);
  const dispatch = useAppDispatch();

  return (
    <CartPageContainer>
      <CheckoutItems>
        <CheckoutItemsTitle>Continutul cosului</CheckoutItemsTitle>
        <CartDivider />
        {cart.map((item: any, index: number) => {
          return (
            <CheckoutItemsContainer key={index}>
              <CheckoutItemsSection>
                <CheckoutItemSection>
                  <CheckoutItemImage src={item.imagine} alt={item.imagine} />
                  <CheckoutItemDetails>
                    <CheckoutItemName>{item.nume}</CheckoutItemName>
                    <CheckoutItemSize>Marime: {item.size}</CheckoutItemSize>
                  </CheckoutItemDetails>
                </CheckoutItemSection>
                <CheckoutItemPrice>{item.total} lei</CheckoutItemPrice>
              </CheckoutItemsSection>
            </CheckoutItemsContainer>
          );
        })}
        <CartDivider />
        <CheckoutItemsTotalContainer>
          <p>Total:</p>
          <p>{totalPrice} Lei</p>
        </CheckoutItemsTotalContainer>
      </CheckoutItems>
      <CheckoutDetailsContainer>
        <CheckoutDetailsSection>
          <CheckoutDetailsTitle>Date contact</CheckoutDetailsTitle>
          <CartDivider />
          <CheckoutDetailsInfo>
            <CheckoutDetailsRow>Nume: {name}</CheckoutDetailsRow>
            <CheckoutDetailsRow>Email: {email}</CheckoutDetailsRow>
            <CheckoutDetailsRow>Telefon: {phone}</CheckoutDetailsRow>
            <CheckoutDetailsRow>Adresa: {address}</CheckoutDetailsRow>
            <CheckoutDetailsRow>Judet: {county}</CheckoutDetailsRow>
            <CheckoutDetailsRow>Oras: {town}</CheckoutDetailsRow>
            <CheckoutDetailsRow>Cod postal: {code}</CheckoutDetailsRow>
          </CheckoutDetailsInfo>
        </CheckoutDetailsSection>
        <SendOrder
          onClick={() => {
            dispatch(
              sendOrder({
                name,
                address,
                code,
                county,
                email,
                phone,
                town,
                cart,
              })
            );
            navigate("/");
            dispatch(clearCart(true));
            setPage({ page, value: 0, pages: ["cos"] });
          }}
        >
          Trimite
        </SendOrder>
        <CheckoutDetailsButton
          onClick={() => {
            navigate("/");
            setPage({ page, value: 0, pages: ["cos"] });
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Inapoi la magazin
        </CheckoutDetailsButton>
      </CheckoutDetailsContainer>
    </CartPageContainer>
  );
}

export default CheckoutFinal;
