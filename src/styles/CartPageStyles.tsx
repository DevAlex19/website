import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2.5rem 0 4rem;
  background: rgba(217, 217, 217, 0.2);
`;
export const CartPageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  column-gap: 20px;
  @media (max-width: 1200px) {
    flex-direction: column-reverse;
  }
`;
export const CartItemsContainer = styled.div`
  flex: 70%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 1.5rem;
  background: white;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`;
export const TotalPriceContainer = styled.div`
  flex: 30%;
`;
export const CartItemsTitle = styled.p`
  font-size: 1.2rem;
`;
export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 570px) {
    flex-direction: column;
    align-items: start;
  }
`;
export const CartItemSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
export const CartItemImage = styled.img`
  width: 140px;
  cursor: pointer;
`;
export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
export const CartItemTitle = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
`;
export const CartItemSize = styled.p`
  font-size: 1rem;
  cursor: pointer;
`;
export const CartItemPriceContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 50px;
  @media (max-width: 790px) {
    flex-direction: column;
    row-gap: 10px;
  }
  @media (max-width: 570px) {
    flex-direction: row;
    margin-top: 1rem;
    justify-content: space-between;
    width: 100%;
  }
`;
export const CartItemInputContainer = styled.div`
  display: flex;
  border: 1px solid #cccccc;
  border-radius: 20px;
  overflow: hidden;
  align-items: center;
`;
export const CartItemButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  width: 30px;
`;
export const CartItemInput = styled.input`
  outline: none;
  border: none;
  width: 40px;
  text-align: center;
  font-size: 1.2rem;
  padding-top: 0.3rem;
`;
export const CartItemPriceSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
export const CartItemPrice = styled.p`
  color: #e32636;
`;
export const CartDeleteItem = styled.div`
  background: #f2f2f2;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const CartDeleteIcon = styled(FontAwesomeIcon)`
  font-size: 0.9rem;
`;
export const TotalPriceSection = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: white;
  padding: 1.5rem;
  p {
    font-size: 1.2rem;
  }
`;
export const TotalPrice = styled.p`
  font-weight: bold;
`;
export const MainButton = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background: black;
  color: white;
  padding: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  border: 1px solid black;
  &:hover {
    background: white;
    color: black;
  }
`;
export const BackButton = styled.button`
  width: 170px;
  display: block;
  margin: auto;
  margin-top: 1.8rem;
  font-size: 1.1rem;
  background: none;
  border: none;
  cursor: pointer;
`;
