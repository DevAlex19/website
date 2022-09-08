import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const OrdersTitle = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2.5rem;
`;
export const EmptyOrdersContainer = styled.div`
  margin: auto;
  margin-top: 9rem;
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  background: rgb(234, 234, 234);
  width: 450px;
`;

export const OrdersList = styled.div`
  margin: auto;
  margin-top: 3.5rem;
  width: 70%;
  overflow-y: auto;
  max-height: 700px;
  margin-bottom: 4rem;
  padding-right: 1rem;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: rgb(234, 234, 234);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  @media (max-width: 1050px) {
    width: 90%;
  }
`;
export const Order = styled.div`
  background: rgb(234, 234, 234);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.3rem;
`;
export const OrderDetailsContainer = styled.div``;
export const OrderNumber = styled.p`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
`;
export const OrderInfo = styled.p`
  color: rgba(0, 0, 0, 0.6);
`;
export const OrderDetails = styled.button`
  background: black;
  color: white;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  transition: color 0.5s;
  &:hover {
    color: #e32636;
  }
`;

export const OrdersModal = styled.div<{ modal: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${({ modal }) => (modal === true ? "block" : "none")};
`;
export const OrdersModalBox = styled.div`
  background: white;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 2rem;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  height: 600px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 600px) {
    width: 90%;
    min-width: 200px;
  }
`;
export const OrdersModalDetails = styled.div``;
export const OrdersModalDetailsTitle = styled.div`
  font-size: 1.3rem;
`;
export const OrdersModalDetailsItem = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  p:last-child {
    margin-left: 0.3rem;
  }
  p:first-child {
    font-weight: 700;
  }
`;
export const OrdersModalProducts = styled.div`
  margin-top: 2.5rem;
`;
export const OrdersModalTitle = styled.div`
  font-size: 1.3rem;
`;
export const OrdersModalProductsSection = styled.div`
  margin-left: 0.8rem;
`;
export const OrdersModalProductsItem = styled.div`
  display: flex;
`;
export const OrdersModalImage = styled.img`
  width: 100px;
  height: 100px;
`;
export const OrdersDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #d7d7d7;
  margin: 1.2rem 0;
`;
export const OrdersModalTotal = styled.div`
  margin-top: 2.5rem;
`;
export const OrdersModalTotalTitle = styled.div`
  font-size: 1.3rem;
`;

export const CloseOrdersModal = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  cursor: pointer;
  right: 20px;
  font-size: 2rem;
`;
