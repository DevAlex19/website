import styled from "styled-components";


export const CategoriesContainer = styled.div`
    display:grid;
    padding:0 1rem;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:400px 500px 500px 400px;
    grid-gap:25px;
`;
export const CategoryItem = styled.div`
    cursor:pointer;
    position:relative;
    overflow:hidden;
    &:nth-child(1){
        grid-area:1/1/2/5;
    }
    &:nth-child(2){
        grid-area:2/1/3/3;
    }
    &:nth-child(3){
        grid-area:2/3/3/5;
    }
    &:nth-child(4){
        grid-area:3/1/4/3;
    }
    &:nth-child(5){
        grid-area:3/3/4/5;
    }
    &:hover img{
        transform:scale(1.1);
    }
`;
export const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    transition:transform 0.5s;
`;
export const CategoryTitle = styled.p`
    color:white;
    position:absolute;
    bottom:50px;
    left:40px;
    font-size:1.8rem;
    text-transform:uppercase;
    text-shadow:5px 5px 10px black;
`;

export const CategoriesTitle = styled.div`
    font-size:2rem;
    text-transform:uppercase;
    text-align:center;
    margin:7rem 0 3rem;
`;