import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    position:relative;
`;
export const MenuContainer = styled.div`
`;
export const HeaderContainer = styled.div`
    background:black;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.6rem 1.5rem;
    @media (max-width:860px){
       display:block;
    }
`;
export const LogoContainer = styled.div`
    color:white;
    position:relative;
    font-size:2.2rem;
    font-style:italic;
    span{
        color:#e32636;
    }
    a{
        text-decoration:none;
        color:white;
    }
    @media (max-width:860px){
        display:block;
        margin-bottom:1rem;
     }
`;

export const BtnsContainer = styled.div`
    display:flex;
    align-items:center;
`;
export const InputContainer = styled.div`
    border-bottom:1px solid white;
    position:relative;
    padding:0.6rem 0.4rem;
    min-width:200px;
    width:300px;
    @media (max-width:860px){
        flex:1;
     }
`;
export const Input = styled.input`
    background:none;
    outline:none;
    border:none;
    width:90%;
    font-size:1rem;
    caret-color:white;
    color:white;
    ::placeholder{
        color:rgba(255,255,255,0.7);
    }
`;
export const InputIcon = styled(FontAwesomeIcon)`
    cursor:pointer;
    position:absolute;
    right:10px;
    &:hover{
        color:#e32636;
    }
`;
export const Icon = styled(FontAwesomeIcon)`
    cursor:pointer;
    transform:scale(1.2);
`;
export const DropdownContact = styled.div`
    position:absolute;
    display:none;
    top:100%;
    right:0;
    background:white;
    color:black;
    border-radius:5px;
    padding:0.7rem;
    box-shadow:1px 1px 5px rgba(0, 0, 0, 0.2);
    min-width:200px;
    z-index:2;
`
export const ContactContainer = styled.div`
    display:flex;
    position:relative;
    padding:1rem;
    border-radius:5px;
    cursor:pointer;
    margin-left:3rem;
    align-items:center;
    font-size:1.1rem;
    p{
        margin-left:0.5rem;
    }
    &:hover{
        background:rgba(255,255,255,0.5);
    }
    &:hover ${DropdownContact}{
        display:block;
    }
    @media (max-width:570px){
        display:none;
     }
`;

export const LoginDropdown = styled.div`
    position:absolute;
    display:none;
    top:100%;
    right:0;
    background:white;
    color:black;
    border-radius:5px;
    padding:0.7rem;
    box-shadow:1px 1px 5px rgba(0, 0, 0, 0.2);
    min-width:220px;
    font-size:1.2rem;
    z-index:2;
`;
export const LoginContainer = styled.div`
    padding:1rem;
    position:relative;
    cursor:pointer;
    border-radius:5px;
    &:hover{
        background:rgba(255,255,255,0.5);
    }
    &:hover ${LoginDropdown}{
        display:block;
    }
`;
export const CartDropdown = styled.div`
    position:absolute;
    display:none;
    top:100%;
    right:0;
    background:white;
    color:black;
    border-radius:5px;
    padding:0.7rem;
    box-shadow:1px 1px 5px rgba(0, 0, 0, 0.2);
    font-size:1.2rem;
    z-index:2;
`;

export const CartContainer = styled.div`
    padding:1rem;
    position:relative;
    cursor:pointer;
    border-radius:5px;
    &:hover{
        background:rgba(255,255,255,0.5);
    }
    &:hover ${CartDropdown}{
        display:block;
    }
`;


export const PhoneContainer = styled.div`
    display:flex;
    border-radius:5px;
    padding:0.5rem;
    div p:last-child{
        font-weight:300;
        font-size:1.1rem;
        margin-top:0.2rem;
    }
    &:hover{
        background:rgb(220,220,220);
    }
`;
export const MailContainer = styled.div`
    display:flex;
    border-radius:5px;
    padding:0.5rem;
    &:hover{
        background:rgb(220,220,220);
    }
`;
export const DropdownIcon = styled(FontAwesomeIcon)``;
export const Contact = styled.p`
    display:flex;
    border-radius:5px;
    padding:0.5rem;
    a{
        text-decoration:none;
        color:black;
    }
    &:hover{
        background:rgb(220,220,220);
    }
`;
export const About = styled.p`
    display:flex;
    border-radius:5px;
    padding:0.5rem;
    a{
        text-decoration:none;
        color:black;
    }
    &:hover{
        background:rgb(220,220,220);
    }
`;


export const ConnectContainer = styled.div`
    display:flex;
    border-radius:5px;
    padding:0.5rem;
    font-size:1.1rem;
    a{
        text-decoration:none;
        color:black;
        margin-left:0.5rem;
    }
    &:hover{
        background:rgb(220,220,220);
    }
`;
export const UserDropdownContainer = styled.div`
    display:flex;
    border-radius:5px;
    padding:0.5rem;
    font-size:1.1rem;
    position:relative;
    a{
        text-decoration:none;
        color:black;
        margin-left:0.5rem;
    }
    p{
        margin-left:0.5rem;
    }
   svg{
    width:20px;
   }
    &:hover{
        background:rgb(220,220,220);
    }
`;
export const Divide = styled.div`
    width:100%;
    background:rgb(220,220,220);;
    height:1px;
    margin:0.5rem 0;
`;
export const RegisterContainer = styled.div`
    display:flex;
    border-radius:5px;
    padding:0.5rem;
    font-size:1.1rem;
    a{
        text-decoration:none;
        color:black;
        margin-left:0.5rem;
    }
    &:hover{
        background:rgb(220,220,220);
    }
}`;
export const PasswordContainer = styled.div`
    display:flex;
    position:relative;
    font-size:1.1rem;
    border-radius:5px;
    padding:0.5rem;
    margin-top:1.5rem;
    a{
        text-decoration:none;
        color:black;
        margin-left:0.5rem;
        color:rgba(0,0,0,0.7);
    }
    &:hover{
        background:rgb(220,220,220);
    }
    &:before{
        position:absolute;
        content:'';
        width:100%;
        top:-12px;
        height:1px;
        left:50%;
        transform:translateX(-50%);
        background:rgba(0,0,0,0.2);
    }
`;
export const HamburgerMenu = styled.div`
    display:none;
    position:absolute;
    cursor:pointer;
    right:0;
    top:6px;
    div{
        width:35px;
        height:3px;
        background:white;
        transform-origin:center;
    }
    
    .line1,.line2{
        margin-bottom:0.5rem;
    }
    .line1,.line3{
        transition:transform 0.5s;
    }
    .line2{
        transition:opacity 0.5s;
    }
    .line1.active{
        transform:translate(0,11px) rotate(45deg);
    }
    .line2.active{
        opacity:0;
    }
    .line3.active{
        transform:translate(0,-12px) rotate(-45deg);
    }
 
    @media (max-width:860px){
        display:block;
     }
`;


export const EmptyCart = styled.div`
     min-width:450px;
     padding:0.5rem;
     p:first-child{
        font-size:1.3rem;
        font-weight:500;
     }
     div{
        display:flex;
        align-items:center;
        padding:0.8rem;
        border-radius:5px;
        font-weight:300;
        text-decoration:underline;
        margin-top:1rem;
     }
     &:hover div{
        background:rgb(220,220,220);
    }
     div img{
        width:50px;
        margin-right:1rem;
     }
     @media (max-width:550px){
        min-width:300px;
    }
`;
