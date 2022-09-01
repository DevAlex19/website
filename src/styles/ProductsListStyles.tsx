import styled from "styled-components";

export const ProductsItem = styled.div`
  width: calc(25% - 15px);
  cursor: pointer;
  transition: box-shadow 0.3s;
  @media (max-width: 1200px) {
    width: calc(33.33% - 14px);
  }
  @media (max-width: 960px) {
    width: calc(50% - 10px);
  }
  @media (max-width: 510px) {
    width: 100%;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
export const ProductImage = styled.img`
  width: 100%;
`;
export const ProductTitle = styled.p`
  text-transform: uppercase;
  margin-top: 0.5rem;
  font-size: 1rem;
`;
export const ProductPrice = styled.p`
  margin-top: 0.5rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
`;
