import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CartContainer = styled.div`
  min-width: 400px;
`;
export const CartItemsContainer = styled.div`
  max-height: 440px;
`;
export const CartItemButton = styled(FontAwesomeIcon)`
  visibility: hidden;
  font-size: 1rem;
`;
export const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  padding: 0.6rem;
  border-radius: 10px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  &:hover ${CartItemButton} {
    visibility: visible;
  }
`;
export const CartItemSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;
export const CartItemImage = styled.img`
  width: 80px;
`;
export const CartItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;
export const CartItemName = styled.p``;
export const CartItemSize = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
`;
export const CartItemPrice = styled.p`
  font-size: 1rem;
`;
export const CartDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #d7d7d7;
  margin: 1.2rem 0;
`;
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TotalPriceName = styled.p``;
export const TotalPriceResult = styled.p`
  font-weight: 700;
`;
export const CartItemPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const CartButton = styled.button`
  background: black;
  cursor: pointer;
  border-radius: 3px;
  padding: 1rem 0;
  width: 100%;
  font-size: 1.2rem;
  color: white;
  transition: background 0.3s, color 0.3s;
  margin-top: 2rem;
  &:hover {
    color: black;
    background: white;
  }
`;
