import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuLinksContainer = styled.div<{ menu: boolean }>`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  @media (max-width: 860px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    flex-direction: column;
    justify-content: start;
    overflow-y: scroll;
    z-index: 1;
    background: white;
    display: ${({ menu }) => (menu === true ? "flex" : "none")};
    width: 100%;
    animation: open 0.5s;
    padding-top: 2rem;
    &::-webkit-scrollbar {
      display: none;
    }
    @keyframes open {
      from {
        left: -100%;
      }
      to {
        left: 0%;
      }
    }
  }
`;
export const CloseMenu = styled(FontAwesomeIcon)<{ open: boolean }>`
  position: absolute;
  right: 30px;
  top: 10px;
  cursor: pointer;
  font-size: 2.5rem;
  display: none;
  @media (max-width: 860px) {
    display: ${({ open }) => (open === true ? "block" : "none")};
  }
`;

export const Dropdown = styled.div<{ open: boolean | string }>`
  display: ${({ open }) => (open === true ? "flex" : "none")};
  padding: 2rem;
  z-index: 1;
  background: white;
  padding-top: 0;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  left: 0;
  position: absolute;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 860px) {
    position: relative;
    flex-direction: column;
    padding: 0;
  }
`;
export const LinkContainer = styled.div<{ open?: boolean }>`
  padding: 1.5rem;
  @media (min-width: 860px) {
    &:hover ${Dropdown} {
      display: ${({ open }) => (open === true ? "flex" : "none")};
    }
  }
`;

export const MainLink = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  &:hover {
    color: #e32636;
  }
`;
export const MainLinkText = styled.p`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: black;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: #e32636;
  }
`;
export const LinkItem = styled(Link)`
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 1rem;
  color: black;
  display: block;
  text-transform: uppercase;
  &:first-child {
    font-weight: bold;
  }
  &:not(:first-child) {
    font-weight: 300;
  }
  &:hover {
    color: #e32636;
  }
`;

export const Links = styled.div`
  margin-top: 1.8rem;
`;

export const Expand = styled(FontAwesomeIcon)`
  margin-left: 1rem;
  @media (min-width: 860px) {
    display: none;
  }
`;
