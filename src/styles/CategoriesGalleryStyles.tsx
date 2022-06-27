import styled from "styled-components";


export const CategoriesContainer = styled.div`
    display:grid;
    padding:0 1rem;
    grid-template-columns:repeat(4,1fr);
    grid-template-rows:400px 500px 500px 400px;
    grid-gap:25px;
    @media (max-width:1100px){
        grid-template-rows:repeat(5,400px);
    }
    @media (max-width:550px){
        display:flex;
        flex-direction:column;
    }
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
    @media (max-width:1100px){
        &:nth-child(6){
            grid-area:4/1/5/3;
        }
        &:nth-child(7){
            grid-area:4/3/5/5;
        }
        &:nth-child(8){
            grid-area:5/1/6/3;
        }
        &:nth-child(9){
            grid-area:5/3/6/5;
        }
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
    margin:9rem 0 4rem;
`;