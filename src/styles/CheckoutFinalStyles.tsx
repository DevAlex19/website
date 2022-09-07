import styled from "styled-components";

export const CheckoutDetailsContainer = styled.div`
  width: 30%;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
export const CheckoutItems = styled.div`
  width: 70%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 1.5rem;
  background: white;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const CheckoutItemsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 540px) {
    flex-direction: column;
    align-items: start;
  }
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
export const SendOrder = styled.div`
  width: 170px;
  display: block;
  margin: auto;
  margin-top: 1.8rem;
  font-size: 1.1rem;
  background: black;
  border: 1px solid black;
  color: white;
  text-align: center;
  font-size: 1.2rem;
  padding: 0.7rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    color: black;
    background: white;
  }
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
  @media (max-width: 540px) {
    width: 100%;
  }
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
export const CheckoutItemPrice = styled.p`
  @media (max-width: 540px) {
    transform: translate(160px, -40px);
  }
`;
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
