import styled from "styled-components";

export const UserInfoContainer = styled.div`
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
    }
    @media (max-width:830px){
        width:100%;
     }
`;
export const Form = styled.form`
    margin:4rem 0 0 0;
    width:80%;
    .inputs{
        display:flex;
        position:relative;
        @media (max-width:1100px){
            flex-direction:column;
        }
    }
`;
export const InputContainer = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    margin-bottom:1.3rem;
`;
export const Label = styled.label`
    font-size:1.2rem;
    margin-bottom:0.5rem;
`;
export const Input = styled.input`  
    margin-right:1rem;
    outline:none;
    padding:0.8rem 0;
    border:1px solid gray;
    border-radius:5px;
    font-size:1rem;
    padding-left:0.5rem;
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