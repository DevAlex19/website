import styled from "styled-components";

export const CheckoutDetailsContainer = styled.div`
  width: 30%;
`;
export const CheckoutItems = styled.div`
  width: 70%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 1.5rem;
  background: white;
`;
export const CheckoutItemsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const CheckoutItemsContainer = styled.div``;
export const CheckoutDetailsTitle = styled.div`
  font-size: 1.2rem;
`;
export const CheckoutDetailsInfo = styled.div``;
export const CheckoutDetailsButton = styled.button`
  width: 170px;
  display: block;
  margin: auto;
  margin-top: 1.8rem;
  font-size: 1.1rem;
  background: none;
  border: none;
  cursor: pointer;
`;
export const CheckoutItemsTitle = styled.div`
  font-size: 1.2rem;
`;
export const CheckoutItemImage = styled.img`
  width: 140px;
`;
export const CheckoutItemSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;
export const CheckoutItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
export const CheckoutItemName = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
`;
export const CheckoutItemSize = styled.p`
  font-size: 1rem;
`;
export const CheckoutItemPrice = styled.p``;
export const CheckoutDetailsRow = styled.p`
  :not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;
export const CheckoutItemsTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 1.2rem;
  }
  p:last-child {
    font-weight: 700;
  }
`;
export const CheckoutDetailsSection = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background: white;
  padding: 1.5rem;
`;
