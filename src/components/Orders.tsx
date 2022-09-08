import { faClose } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOrders } from "../app/data/actions";
import { initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
import { OrdersContainer } from "../styles/DashboardStyles";
import {
  EmptyOrdersContainer,
  OrdersList,
  OrdersTitle,
  Order,
  OrderDetailsContainer,
  OrderNumber,
  OrderInfo,
  OrderDetails,
  OrdersModal,
  OrdersModalBox,
  OrdersModalDetails,
  OrdersModalProducts,
  OrdersModalTotal,
  OrdersModalDetailsTitle,
  OrdersDivider,
  OrdersModalDetailsItem,
  OrdersModalProductsItem,
  OrdersModalProductsSection,
  OrdersModalImage,
  OrdersModalTitle,
  OrdersModalTotalTitle,
  CloseOrdersModal,
} from "../styles/Orders";

function Orders() {
  const dispatch = useAppDispatch();
  const {
    userLogin: {
      user: { registerEmail },
    },
    userOrders,
  } = useSelector((state: initialStateType) => state);
  const [order, setOrder] = useState({
    county: "",
    town: "",
    phone: "",
    address: "",
    name: "",
    email: "",
    code: "",
    cart: [],
  });
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getOrders(registerEmail));
  }, []);
  console.log(order);
  return (
    <OrdersContainer>
      {userOrders.length > 0 ? (
        <OrdersList>
          {userOrders.map((item: any, index: number) => {
            const date = new Date(item.date);
            return (
              <Order key={index}>
                <OrderDetailsContainer>
                  <OrderNumber>Comanda nr. {item.number}</OrderNumber>
                  <OrderInfo>
                    Plasata:{" "}
                    {date.getDate() +
                      " - " +
                      (date.getMonth() + 1) +
                      " - " +
                      date.getFullYear()}{" "}
                    | Total: 29 lei
                  </OrderInfo>
                </OrderDetailsContainer>
                <OrderDetails
                  onClick={() => {
                    setOrder(item);
                    setModal(true);
                  }}
                >
                  detalii comanda
                </OrderDetails>
              </Order>
            );
          })}
          <OrdersModal modal={modal} onClick={() => setModal(false)}>
            <OrdersModalBox onClick={(e: any) => e.stopPropagation()}>
              <OrdersModalDetails>
                <OrdersModalDetailsTitle>Detalii</OrdersModalDetailsTitle>
                <OrdersDivider />
                <OrdersModalDetailsItem>
                  <p>Nume:</p>
                  <p>{order.name}</p>
                </OrdersModalDetailsItem>
                <OrdersModalDetailsItem>
                  <p>Email:</p>
                  <p>{order.email}</p>
                </OrdersModalDetailsItem>
                <OrdersModalDetailsItem>
                  <p>Adresa:</p>
                  <p>{order.address}</p>
                </OrdersModalDetailsItem>
                <OrdersModalDetailsItem>
                  <p>Telefon:</p>
                  <p>{order.phone}</p>
                </OrdersModalDetailsItem>
                <OrdersModalDetailsItem>
                  <p>Judet:</p>
                  <p>{order.county}</p>
                </OrdersModalDetailsItem>
                <OrdersModalDetailsItem>
                  <p>Oras:</p>
                  <p>{order.town}</p>
                </OrdersModalDetailsItem>
                <OrdersModalDetailsItem>
                  <p>Cod postal:</p>
                  <p>{order.code}</p>
                </OrdersModalDetailsItem>
              </OrdersModalDetails>
              <OrdersModalProducts>
                <OrdersModalTitle>Produse</OrdersModalTitle>
                <OrdersDivider />
                {order.cart.map((item: any, index: number) => {
                  return (
                    <OrdersModalProductsItem>
                      <OrdersModalImage src={item.imagine} />
                      <OrdersModalProductsSection>
                        <p
                          style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}
                        >
                          {item.nume}
                        </p>
                        <p style={{ marginBottom: "0.5rem" }}>
                          Cantitate: {item.quantity}
                        </p>
                        <p style={{ fontWeight: "700" }}>
                          Pret: {item.total} lei
                        </p>
                      </OrdersModalProductsSection>
                    </OrdersModalProductsItem>
                  );
                })}
              </OrdersModalProducts>
              <OrdersModalTotal>
                <OrdersModalTotalTitle>Total</OrdersModalTotalTitle>
                <OrdersDivider />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontWeight: "700" }}>Total:</p>
                  <p style={{ fontWeight: "700" }}>
                    {order.cart.reduce((res: any, acc: any) => {
                      return res + +acc.total;
                    }, 0)}{" "}
                    lei
                  </p>
                </div>
              </OrdersModalTotal>
              <CloseOrdersModal
                onClick={() => setModal(false)}
                icon={faClose}
              />
            </OrdersModalBox>
          </OrdersModal>
        </OrdersList>
      ) : (
        <>
          <OrdersTitle>Comenzile mele</OrdersTitle>
          <EmptyOrdersContainer>Nu ai nici o comanda.</EmptyOrdersContainer>
        </>
      )}
    </OrdersContainer>
  );
}

export default Orders;
