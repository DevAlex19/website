import React, { useEffect } from "react";
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
} from "../styles/Orders";

function Orders() {
  const dispatch = useAppDispatch();
  const {
    userLogin: {
      user: { registerEmail },
    },
    userOrders,
  } = useSelector((state: initialStateType) => state);

  useEffect(() => {
    dispatch(getOrders(registerEmail));
  }, []);

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
                <OrderDetails>detalii comanda</OrderDetails>
              </Order>
            );
          })}
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
