import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const CheckoutHeaderContainer = styled.div`
  margin: 0 auto 2.5rem;
  display: flex;
  justify-content: center;
  max-width: 950px;
  position: relative;
  // @media (max-width: 540px) {
  //   &:before {
  //     content: "";
  //     position: absolute;
  //     width: 70%;
  //     height: 5px;
  //     background: #f2f2f2;
  //     left: 12%;
  //     top: 50%;
  //     transform: translateY(-50%);
  //   }
  }
`;
export const CheckoutHeaderItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid ${({ color }) => color};
  border-radius: 50%;
  width: 70px;
  height: 70px;
  background:white;
  @media (max-width: 850px) {
    width: 50px;
    height: 50px;
  }
}
`;
export const CheckoutHeaderItemContainer = styled.div<{ width: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: auto;
  position: relative;
`;
export const CheckoutHeaderItemBox = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (max-width: 540px) {
    :not(:last-child):before {
      content: "";
      position: absolute;
      width: 100%;
      height: 5px;
      background:${({ color }) => color};;
    }
`;
export const CheckoutItemTitle = styled.div<{ color: string }>`
  margin-left: 0.8rem;
  font-size: 1.3rem;
  color: ${({ color }) => color};
  @media (max-width: 850px) {
    font-size: 1rem;
  }
  @media (max-width: 540px) {
    display: none;
  }
`;
export const CheckoutHeaderIcon = styled(FontAwesomeIcon)<{ color: string }>`
  font-size: 1.2rem;
  color: ${({ color }) => color};
`;
export const CheckoutIcon = styled(FontAwesomeIcon)`
  position: absolute;
  left: 100%;
  @media (max-width: 540px) {
    display: none;
  }
`;
