import styled from "styled-components";

export const ProductsListContainer = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 20px;
  @media (max-width: 860px) {
    width: 100%;
  }
`;
