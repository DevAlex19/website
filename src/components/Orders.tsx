import React from "react";
import { OrdersContainer } from "../styles/DashboardStyles";
import { EmptyOrdersContainer, OrdersList, OrdersTitle,Order, OrderDetailsContainer, OrderNumber, OrderInfo, OrderDetails } from "../styles/Orders";


function Orders(){
    return <OrdersContainer>
       <OrdersTitle>Comenzile mele</OrdersTitle>
       <EmptyOrdersContainer>Nu ai nici o comanda.</EmptyOrdersContainer>
       {/* <OrdersList>
        <Order>
            <OrderDetailsContainer>
                <OrderNumber>Comanda nr.34835783</OrderNumber>
                <OrderInfo>Plasata: 11 mai 2022, 09:28 | Total: 29 lei</OrderInfo>
            </OrderDetailsContainer>
            <OrderDetails>detalii comanda</OrderDetails>
        </Order>
        <Order>
            <OrderDetailsContainer>
                <OrderNumber>Comanda nr.34835783</OrderNumber>
                <OrderInfo>Plasata: 11 mai 2022, 09:28 | Total: 29 lei</OrderInfo>
            </OrderDetailsContainer>
            <OrderDetails>detalii comanda</OrderDetails>
        </Order>
        <Order>
            <OrderDetailsContainer>
                <OrderNumber>Comanda nr.34835783</OrderNumber>
                <OrderInfo>Plasata: 11 mai 2022, 09:28 | Total: 29 lei</OrderInfo>
            </OrderDetailsContainer>
            <OrderDetails>detalii comanda</OrderDetails>
        </Order>
        <Order>
            <OrderDetailsContainer>
                <OrderNumber>Comanda nr.34835783</OrderNumber>
                <OrderInfo>Plasata: 11 mai 2022, 09:28 | Total: 29 lei</OrderInfo>
            </OrderDetailsContainer>
            <OrderDetails>detalii comanda</OrderDetails>
        </Order>
        <Order>
            <OrderDetailsContainer>
                <OrderNumber>Comanda nr.34835783</OrderNumber>
                <OrderInfo>Plasata: 11 mai 2022, 09:28 | Total: 29 lei</OrderInfo>
            </OrderDetailsContainer>
            <OrderDetails>detalii comanda</OrderDetails>
        </Order>
        <Order>
            <OrderDetailsContainer>
                <OrderNumber>Comanda nr.34835783</OrderNumber>
                <OrderInfo>Plasata: 11 mai 2022, 09:28 | Total: 29 lei</OrderInfo>
            </OrderDetailsContainer>
            <OrderDetails>detalii comanda</OrderDetails>
        </Order>
        <Order>
            <OrderDetailsContainer>
                <OrderNumber>Comanda nr.34835783</OrderNumber>
                <OrderInfo>Plasata: 11 mai 2022, 09:28 | Total: 29 lei</OrderInfo>
            </OrderDetailsContainer>
            <OrderDetails>detalii comanda</OrderDetails>
        </Order>
       </OrdersList> */}
    </OrdersContainer>
}

export default Orders;