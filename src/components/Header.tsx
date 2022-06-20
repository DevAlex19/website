import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faPhoneFlip,faQuestion,faUser,
faCartShopping } from '@fortawesome/free-solid-svg-icons'

const HeaderContainer = styled.div`
    background:black;
    color:white;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0.5rem 1.5rem;
`;
const LogoContainer = styled.div`
    color:white;
    font-size:2.5rem;
    font-style:italic;
    span{
        color:#e32636;
    }
`;

const BtnsContainer = styled.div`
    display:flex;
    align-items:center;
`;
const InputContainer = styled.div`
    border-bottom:1px solid white;
    padding:0.6rem 0.4rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-width:200px;
    width:300px;
`;
const Input = styled.input`
    background:none;
    outline:none;
    border:none;
    caret-color:white;
    color:white;
    ::placeholder{
        color:rgba(255,255,255,0.7);
    }
`;
const InputIcon = styled(FontAwesomeIcon)`
    cursor:pointer;
    &:hover{
        color:#e32636;
    }
`;
const Icon = styled(FontAwesomeIcon)`
    cursor:pointer;
    transform:scale(1.2);
`;
const ContactContainer = styled.div`
    display:flex;
    cursor:pointer;
    margin-left:2.5rem;
    align-items:center;
    p{
        margin-left:0.4rem;
    }
    &:hover{
        color:#e32636;
    }
`;
const HelpContainer = styled.div`
    margin-left:1.5rem;
    display:flex;
    cursor:pointer;
    align-items:center;
    p{
        margin-left:0.4rem;
    }
    &:hover{
        color:#e32636;
    }
`;
const LoginContainer = styled.div`
    margin-left:1.5rem;
    &:hover{
        color:#e32636;
    }
`;
const CartContainer = styled.div`
    margin-left:1.5rem;
    &:hover{
        color:#e32636;
    }
`;

function Header(){
    return <HeaderContainer>
        <LogoContainer className='logo'><span>4</span>sport</LogoContainer>
        <BtnsContainer>
            <InputContainer>
                <Input placeholder="Caută..."/>
                <InputIcon icon={faMagnifyingGlass} />
            </InputContainer>
            <ContactContainer>
                <Icon icon={faPhoneFlip}/>
                <p>Contact</p>
            </ContactContainer>
            <HelpContainer>
                <Icon icon={faQuestion}/>
                <p>Ajutor</p>
            </HelpContainer>
            <LoginContainer>
                <Icon icon={faUser}/>
            </LoginContainer>
            <CartContainer>
                <Icon icon={faCartShopping}/>
            </CartContainer>
        </BtnsContainer>
    </HeaderContainer>
}

export default Header;