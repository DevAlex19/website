import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DashboardContainer = styled.div`
    width:100%;
    display:flex;
    min-height:600px;
    @media (max-width:830px){
        flex-direction:column;
        margin-bottom:3rem;
    }
`;
export const SettingsContainer = styled.div<{open?:boolean}>`
    width:35%;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    background:rgb(234, 234, 234);
    padding:3rem;
    @media (max-width:830px){
        width:100%;
        align-items:flex-start;
        padding:1rem;
        .settings{
            position:fixed;
            z-index:1;
            top:0;
            left:0;
            width:100%;
            overflow:hidden;
            height:${({open})=> open === true ? '380px' : '0px'};
            background:rgb(234, 234, 234);
            box-shadow:0 2px 5px black;
        }
    }
`;
export const OrdersContainer = styled.div`
    width:65%;
    height:100%;
    @media (max-width:830px){
       width:100%;
    }
`;
export const UserAvatarContainer = styled.div`
    display:flex;
    padding-bottom:2rem;
    border-bottom:1px solid rgba(160,160,160,0.5);
    flex-direction:column;
    text-align:center;
    p{
        font-size:1.1rem;
    }
    @media (max-width:830px){
        flex-direction:row;
        align-items:center;
        padding:0;
        margin-top:2rem;
        padding-left:2rem;
        padding-bottom:1rem;
     }
`;
export const Avatar = styled(FontAwesomeIcon)`
    font-size:2.5rem;
    margin-bottom:1.2rem;
    color:rgb(160,160,160);
    @media (max-width:830px){
        margin-right:1rem;
     }
`;
export const Icon = styled(FontAwesomeIcon)`
    font-size:1.3rem;
    color:black;
    width:30px;
    margin-right:0.3rem;
`;
export const LinkContainer = styled.div`
    display:flex;
    cursor:pointer;
    padding:0.5rem;
    border-radius:5px;
    margin-bottom:0.5rem;
    &:hover{
        background:rgb(220,220,220);
    }
    p{
        font-size:1.1rem;
    }
    &.mt{
        margin-top:1.2rem;
    }
    &.mb{
        margin-bottom:1.2rem;
    }
    @media (max-width:830px){
        margin-left:1.5rem;
     }
`;
export const LogOut = styled.div`
    position:relative;
    cursor:pointer;
    transition:color 0.5s;
    margin-top:1.2rem;
    
    &:hover{
        color:#e32636;
    }
    @media (max-width:830px){
        margin-left:2rem;
     }
`;
export const Divide = styled.div`
    width:100%;
    height:1px;
    background:rgba(160,160,160,0.5);
`;

export const MobileMenu = styled.div`
    display:none;
    align-items:center;
    cursor:pointer;
    @media (max-width:830px){
        display:flex;
    }
`;

export const CloseBtn = styled(Icon)<{open?:boolean}>`
    position:fixed;
    display:none;
    cursor:poiner;
    right:10px;
    z-index:2;
    top:4%;
    @media (max-width:830px){
        display:${({open}) => open === true ? 'flex' : 'none'};
    }
`;