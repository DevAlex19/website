import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GalleryContainer = styled.div`
    position:relative;
    width:100vw;
    height:1000px;
    overflow:hidden;
`;
export const ItemContainer = styled.div<{dataNumber:number,slide:number}>`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    transition:left 0.5s;
    img{
        display:block;
        width:100%;
        height:100%;
        object-fit:cover;
    }
   
    &:nth-child(${({dataNumber}) => dataNumber}){
        left:calc(100vw * ${({slide}) => slide});
    }
`
export const ItemBtn = styled(Link)`
    position:absolute;
    color:white;
    padding:1.2rem 1.5rem;
    bottom:100px;
    left:50%;
    transform:translate(-50%);
    font-size:1.5rem;
    text-transform:uppercase;
    text-decoration:none;
    background:black;
    border:1px solid white;
    transition:background 0.5s,color 0.5s;
    border-radius:5px;
    &:hover{
        background:white;
        color:#e32636;
    }
`
export const Arrow = styled(FontAwesomeIcon)`
    position:absolute;
    top:45%;
    color:white;
    cursor:pointer;
    font-size:4rem;
    transform:translateY(-50%);
    transition:color 0.3s;
    &.left{
        left:30px;
    }
    &.right{
        right:30px;
    }
    &:hover{
        color:#e32636;
    }
`;
export const DotsContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-top:1.5rem;
`;
export const Dot = styled.div<{active:number}>`
    width:15px;
    height:15px;
    border-radius:50%;
    background:gray;
    cursor:pointer;
    transition:background 0.3s;
    &.ml{
        margin-left:0.4rem;
    }
    &:nth-child(${({active}) => active + 1}){
        background:#e32636;
    }
    &:hover{
        background:#e32636;
    }
`;