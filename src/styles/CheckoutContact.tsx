import styled from "styled-components";

export const CheckoutContactContainer = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 1.5rem;
  background: white;
  @media (max-width: 1200px) {
    margin-top: 2rem;
  }
`;
export const CheckoutContactTitle = styled.p`
  font-size: 1.2rem;
`;
export const CheckoutContactInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  flex: 1;
  margin-bottom: 1.1rem;
`;
export const CheckoutContactLabel = styled.label`
  font-size: 1.1rem;
`;
export const CheckoutContactInput = styled.input`
  outline: none;
  font-size: 1.1rem;
  padding: 0.5rem;
`;
export const CheckoutContactSection = styled.div`
  display: flex;
  width: 100%;
  column-gap: 20px;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;
export const CheckoutContactTotalPrice = styled.div`
  width: 30%;
  @media (max-width: 1200px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
