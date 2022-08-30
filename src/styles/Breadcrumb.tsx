import styled from "styled-components";
import { Link } from "react-router-dom";

export const BreadCrumbContainer = styled.div`
  display: flex;
  padding: 1rem;
  column-gap: 1.5rem;
  font-size: 0.9rem;
`;
export const BreadCrumbLink = styled(Link)`
  text-decoration: none;
  color: black;
  position: relative;
  font-weight: 600;
  &:after {
    position: absolute;
    content: "/";
    top: 50%;
    transform: translateY(-50%);
    right: -15px;
  }
`;
export const BreadCrumbText = styled.p`
  font-weight: 400;
`;
