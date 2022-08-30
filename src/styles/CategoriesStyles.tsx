import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoriesContainer = styled.div`
  background: #f4f4f4;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const CategoriesLinks = styled(Link)`
  color: black;
  text-align: center;
  font-size: 0.8rem;
  background: white;
  text-decoration: none;
  padding: 0.7rem 1rem;
  transition: background 0.3s;
  flex: 1 0 200px;
  &:hover {
    background: #d7d7d7;
  }
`;

export const ProductsContainer = styled.div`
  padding: 0 1rem;
  margin-top: 1.7rem;
`;
export const ProductsSection = styled.div``;
export const ProductsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProductsHeaderTitle = styled.p`
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: 1.3rem;
  &:before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    background: #e32636;
    border-radius: 50%;
    left: -1.3rem;
    top: 40%;
    transform: translateY(-50%);
  }
`;
export const SortProductsContainer = styled.div`
  border: 1px solid black;
  position: relative;
`;
export const SortProductsItems = styled.div`
  position: absolute;
`;
export const SortProductsSelected = styled.div``;
export const SortProductsItem = styled.div``;
