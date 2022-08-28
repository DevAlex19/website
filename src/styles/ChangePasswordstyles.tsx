import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


export const PasswordContainer = styled.div`
    width:65%;
    height:100%;
    display:flex;
    flex-direction:column;
    margin-bottom:4rem;
    align-items:center;
    p:first-child{
        font-size:1.5rem;
        text-align:center;
        margin-top:2.5rem;
        margin-bottom:4rem;
    }
    @media (max-width:830px){
        width:100%;
     }
     form{
        width:60%;
        @media (max-width:900px){
            width:80%;
         }
     }
`
export const InputContainer = styled.div`
     position:relative;
     margin-bottom:2.5rem;
`;
export const Label = styled.label`
    font-size:1.2rem;
`;
export const Input = styled.input`
    width:100%;
    outline:none;
    margin-top:0.5rem;
    padding:0.8rem 0;
    border:1px solid gray;
    border-radius:5px;
    font-size:1rem;
    padding-left:0.5rem;
`;
export const PasswordIcon = styled(FontAwesomeIcon)`
     position:absolute;
     right:10px;
     top:55%;
     cursor:pointer;
`;
export const SaveBtn = styled.button`
    background:rgba(0,0,0,1);
    color:white;
    font-size:1.2rem;
    padding:1rem;
    border-radius:5px;
    display:block;
    margin:auto;
    margin-top:5rem;
    cursor:pointer;
    border:none;
    transition:background 0.5s, color 0.5s;
    &:hover{
        background:rgba(0,0,0,0.8);
        color:white;
    }
`;