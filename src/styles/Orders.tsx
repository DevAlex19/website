import styled from "styled-components";


export const OrdersTitle = styled.div`
    font-size:1.5rem;
    text-align:center;
    margin-top:2.5rem;
`;
export const EmptyOrdersContainer = styled.div`
    margin:auto;
    margin-top:9rem;
    display:flex;
    justify-content:center;
    padding:1rem;
    border-radius:5px;
    font-size:1.2rem;
    background:rgb(234, 234, 234);
    width:450px;
`;

export const OrdersList = styled.div`
    margin:auto;
    margin-top:3.5rem;
    width:70%;
    overflow-y:auto;
    max-height:700px;
    margin-bottom:4rem;
    padding-right:1rem;
    ::-webkit-scrollbar {
        width:8px;
        
      }
    ::-webkit-scrollbar-track {
        background:rgb(234, 234, 234);
        border-radius:10px;
      }
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius:10px;
      }
    @media (max-width:1050px){
        width:90%;
    }
`;
export const Order = styled.div`
    background:rgb(234, 234, 234);
    border-radius:5px;
    padding:1rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:1.3rem;
`;
export const OrderDetailsContainer = styled.div`
`;
export const OrderNumber = styled.p`
    margin-bottom:0.5rem;
    font-size:1.1rem;
    font-weight:600;
`;
export const OrderInfo = styled.p`
    color: rgba(0, 0, 0, 0.6);
`;
export const OrderDetails = styled.button`
    background:black;
    color:white;
    padding:0.5rem;
    border-radius:5px;
    cursor:pointer;
    transition:color 0.5s;
    &:hover{
        color:#e32636;
    }
`;