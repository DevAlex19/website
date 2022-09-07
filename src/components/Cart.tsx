import { EmptyCart } from "../styles/HeaderStyles";
import { useNavigate } from "react-router-dom";
import { generateRoute } from "../app/helperFunctions/generateRoute";
import {
  CartButton,
  CartContainer,
  CartDivider,
  CartItemButton,
  CartItemContainer,
  CartItemDetails,
  CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemPriceContainer,
  CartItemsContainer,
  CartItemSection,
  CartItemSize,
  TotalPrice,
  TotalPriceName,
  TotalPriceResult,
} from "../styles/CartStyles";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/store/store";
import { deleteItem } from "../app/reducer/loginSlice";

function Cart() {
  const navigate = useNavigate();
  const { cart } = useSelector((state: any) => state);
  const totalPrice = cart.reduce((res: any, acc: any) => {
    return res + +acc.total;
  }, 0);
  const dispatch = useAppDispatch();

  function deleteProduct(product: any) {
    dispatch(deleteItem(product));
  }

  return (
    <>
      {cart.length > 0 ? (
        <CartContainer>
          <CartItemsContainer>
            {cart.slice(0, 4).map((item: any, index: number) => {
              return (
                <CartItemContainer key={index}>
                  <CartItemSection>
                    <CartItemImage src={item.imagine} alt={item.imagine} />
                    <CartItemDetails>
                      <CartItemName>{item.nume}</CartItemName>
                      <CartItemSize>Marime: {item.size}</CartItemSize>
                    </CartItemDetails>
                  </CartItemSection>
                  <CartItemPriceContainer>
                    <CartItemPrice>{item.total} lei</CartItemPrice>
                    <CartItemButton
                      onClick={() => deleteProduct(item)}
                      icon={faClose}
                    />
                  </CartItemPriceContainer>
                </CartItemContainer>
              );
            })}
          </CartItemsContainer>
          <CartDivider />
          <TotalPrice>
            <TotalPriceName>Total:</TotalPriceName>
            <TotalPriceResult>{totalPrice} lei</TotalPriceResult>
          </TotalPrice>
          <CartButton onClick={() => navigate("/checkout")}>
            Vezi detalii cos
          </CartButton>
        </CartContainer>
      ) : (
        <EmptyCart>
          <p>Cosul este gol.</p>
          <div onClick={() => navigate(generateRoute(["ghete de fotbal"]))}>
            <img
              alt="ghete"
              src="https://i1.t4s.cz/products/ah7383-400/nike-vapor-12-academy-ic-181831-ah7383-400s1.png"
            />
            <p>Vezi ultimele modele de ghete de fotbal.</p>
          </div>
        </EmptyCart>
      )}
    </>
  );
}

export default Cart;
