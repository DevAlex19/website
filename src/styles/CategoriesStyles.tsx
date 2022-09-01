import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CategoriesContainer = styled.div`
  background: #e0e0e0;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
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
  box-shadow: 1px 1px 5px #d7d7d7;
  &:hover {
    background: #d7d7d7;
  }
`;

export const ProductsContainer = styled.div`
  padding: 0 1rem;
  margin-top: 1.7rem;
`;
export const ProductsSection = styled.div`
  display: flex;
  column-gap: 20px;
  margin-bottom: 6rem;
`;
export const ProductsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  @media (max-width: 780px) {
    flex-direction: column;
    align-items: start;
  }
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
  border: 1px solid #727272;
  width: 220px;
  position: relative;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  @media (max-width: 780px) {
    width: 100%;
    margin-top: 1rem;
  }
  @media (max-width: 500px) {
    flex-direction: column-reverse;
    align-items: start;
  }
`;
export const FiltersButton = styled.div`
  border: 1px solid #727272;
  width: 220px;
  position: relative;
  cursor: pointer;
  padding: 0.6rem 0.8rem;
  display: none;
  justify-content: space-between;
  @media (max-width: 860px) {
    display: flex;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
export const SortProductsItems = styled.div<{ dropdown: boolean }>`
  position: absolute;
  top: 100%;
  border: 1px solid #727272;
  width: 100%;
  left: 0;
  background: white;
  padding: 0.2rem 0;
  display: ${({ dropdown }) => (dropdown ? "block" : "none")};
`;
export const SortProductsSelected = styled.div`
  transition: color 0.3s;
  padding: 0.6rem 0.8rem;
  &.open {
    color: gray;
  }
`;
export const SortProductsItem = styled.div`
  padding: 0.3rem 0.8rem;
  &:hover {
    background: #277bc0;
    color: white;
  }
`;
export const SortProductsArrow = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  transform: rotate(-90deg) translateX(50%);
  right: 12px;
`;
