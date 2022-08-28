import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FooterContainer = styled.div`
    background:black;
    color:white;
    padding-bottom:3rem;
`;
export const FooterFlexContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    @media (max-width:880px){
        flex-direction:column;
        align-items:center;
    }
    padding:3rem;
`;
export const MenuContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
export const FooterLink = styled(Link)`
    color:white;
    text-decoration:none;
    font-size:1.3rem;
    margin-bottom:0.6rem;
    transition:color 0.5s;
    font-weight:300;
    &:first-child{
        font-weight:400;
    }
    @media (max-width:880px){
        &:not(:first-child){
            display:none;
        }
    }
    &:hover{
        color:#e32636;
    }
`;
export const SocialsContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:3rem;
`;
export const SocialLinks = styled(FontAwesomeIcon)`
    font-size:2.5rem;
    margin-left:2rem;
    cursor:pointer;
    transition:color 0.5s;
    &:first-child{
        margin-left:0;
    }
    &:hover{
        color:#e32636;
    }
`;