import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
    display:flex;
    width:100%;
    height:89vh;
    margin-bottom:-10rem;
    @media (max-width:1100px){
        flex-direction:column;
        height:auto;
    }
`;
export const CreateAccountContainer = styled.div<{openLogin?:boolean}>`
    width:${({openLogin}) => openLogin === true ? '55%' : '45%'};
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    padding-top:15rem;
    background:rgb(234, 234, 234);
    transition:width 0.5s, height 0.5s;
    @media (max-width:1100px){
        width:100%;
        padding-top:6rem;
        height:${({openLogin}) => openLogin === true ? '680px' : '340px'};
    }
    @media (max-width:580px){
        width:100%;
        padding-top:6rem;
        height:${({openLogin}) => openLogin === true ? '750px' : '340px'};
    }
`;
export const UserLoginContainer = styled.div<{openLogin?:boolean}>`
    width:${({openLogin}) => openLogin === true ? '55%' : '45%'};
    display:flex;
    flex-direction:column;
    align-items:center;
    position:relative;
    padding-top:15rem;
    transition:width 0.5s,height 0.5s;
    @media (max-width:1100px){
        width:100%;
        padding-top:6rem;
        height:${({openLogin}) => openLogin === true ? '650px' : '340px'};
    }
`;
export const UserLoginTitle = styled.p`
    font-size:1.8rem;
    font-weight:600;
    text-transform:uppercase;
`;
export const InputContainer = styled.div<{openLogin?:boolean}>`
    position:absolute;
    overflow:hidden;
    width:500px;
    left:50%;
    transform:translateX(-50%);
    transition:height 0.5s, padding 0.5s;
    padding-top:${({openLogin}) => openLogin === true ? '5rem' : '0'};
    height:${({openLogin}) => openLogin === true ? '570px' : '0px'};
    .register{
        display:flex;
        justify-content:space-between;
    }
    .register div{
        width:48%;
    }
    @media (max-width:580px){
        width:100%;
        .register{
            flex-direction:column;
        }
        .register div{
            width:100%;
        }
    }
    
`;
export const InputForm = styled.form`
   position:relative;
`;
export const Input = styled.input`
    border:none;
    border-bottom:1px solid black;
    width:100%;
    padding:0.6rem 0;
    font-size:1.3rem;
    outline:none;
    background:transparent;
`;
export const InputLabel = styled.label`
    position:absolute;
    top:10px;
    pointer-events:none;
    font-size:1.3rem;
    color:rgb(107, 110, 104);
    transition:transform 0.5s, font-size 0.5s;
    &.focus{
        transform:translateY(-30px);
        font-size:1.2rem;
    }
`;
export const InputWrapper = styled.div`
    position:relative;  
    width:100%;
    margin-bottom:2.4rem;
 
`;
export const UserLoginBtn = styled.button<{openLogin?:boolean}>`
    background:none;
    transform:translateY(${({openLogin}) => openLogin === true ? '260px' : ''});
    cursor:pointer;
    transition:transform 0.5s, background 0.3s,color 0.3s,opacity 0.2s;
    border:3px solid black;
    border-radius:3px;
    padding:1rem 0;
    width:500px;
    font-size:1.5rem;
    font-weight:500;
    pointer-events:${({openLogin}) => openLogin === true ? 'none' : 'auto'};
    z-index:0;
    position:relative;
    margin-top:3.5rem;
    color:black;
    opacity:${({openLogin}) => openLogin === true ? '0' : '1'};
    &.registerBtn{
        transform:translateY(${({openLogin}) => openLogin === true ? '340px' : ''});
        @media (max-width:580px){
            transform:translateY(${({openLogin}) => openLogin === true ? '420px' : ''});
        }
    }
    @media (max-width:580px){
        width:300px;
    }
`;
export const FormBtn = styled.button`
    background:black;
    cursor:pointer;
    border:3px solid black;
    border-radius:3px;
    padding:1rem 0;
    width:500px;
    font-size:1.5rem;
    font-weight:500;
    z-index:1000;
    position:relative;
    margin-top:3.5rem;
    color:white;
    transition:background 0.3s,color 0.3s;
`;

export const ForgotPasswordLink = styled(Link)`
    transform:translateY(320px);
    color:black;
    font-size:1.3rem;
    margin-top:2rem;
`;
