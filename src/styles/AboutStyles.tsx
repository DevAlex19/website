import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const AboutContainer = styled.div`
    p:first-child{
        font-size:1.8rem;
        margin-top:3rem;
        font-weight:500;
    }
    width:55%;
    margin:auto;
    margin-bottom:4rem;
    display:flex;
    flex-direction:column;
    @media (max-width:1000px){
        width:80%;
    }
`;
export const AboutDescription = styled.div`
    
    margin-top:3rem;
    line-height:1.5rem;
    color:#727272;
`;

export const ContactContainer = styled.div`
    div:not(:first-child){
        display:flex;
        align-items:center;
    }
    .date{
        display:flex;
        flex-direction:column;
    }
`;
export const ContactTitle = styled.div`
        font-size:1.8rem;
        margin-top:5rem;
        font-weight:500;
        margin-bottom:2rem;
`;
export const ContactDetails = styled.div`
    p{
        margin-left:0.8rem;
    }
    margin-bottom:1rem;
`;
export const Icon = styled(FontAwesomeIcon)`
    font-size:1.5rem;
`;