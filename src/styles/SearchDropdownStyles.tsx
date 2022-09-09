import styled from "styled-components";

export const SearchDropdownContainer = styled.div<{ modal: boolean }>`
  position: absolute;
  display: ${({ modal }) => (modal === true ? "block" : "none")};
  background: white;
  color: black;
  top: 115%;
  left: -24px;
  z-index: 2;
  box-shadow: 1px 1px 5px black;
  padding: 1rem;
  min-width: 350px;
  @media (max-width: 860px) {
    width: 100%;
    min-width: 100%;
    left: 0;
  }
`;

export const SearchItemContainer = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const SearchItemSection = styled.div``;
export const SearchItemImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`;
export const SearchItemName = styled.p``;
export const SearchItemPrice = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  margin-top: 0.3rem;
`;
export const SearchItemBtn = styled.button`
  display: block;
  margin: auto;
  background: none;
  border: none;
  margin-bottom: 0.3rem;
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s;
  &:hover {
    color: red;
  }
`;
