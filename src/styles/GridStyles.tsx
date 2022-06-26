import styled from "styled-components";

export const GridContainer = styled.div`
    display:grid;
    margin-top:2rem;
    padding:0 1rem;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows:400px 600px 600px;
    grid-gap:25px;
    @media (max-width:1500px){
        grid-template-rows:300px 400px 400px;
    }
    @media (max-width:1100px){
        grid-template-rows:200px 300px 300px;
    }
    @media (max-width:800px){
        grid-row-gap:20px;
        grid-column-gap:0;
        grid-template-rows:repeat(4,400px);
        grid-template-columns:1fr;
    }
`;
export const GridItem = styled.div`
    cursor:pointer;
    overflow:hidden;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        transition:transform 0.5s;
    }
    &:hover img{
        transform:scale(1.1);
    }
    &:nth-child(1){
        grid-area:1/1/2/3;
    }
    &:nth-child(2){
        grid-area:2/1/3/2;
    }
    &:nth-child(3){
        grid-area:2/2/4/3;
    }
    &:nth-child(4){
        grid-area:3/1/4/2;
    }
    @media (max-width:800px){
        &:nth-child(1){
            grid-area:1/1/2/3;
        }
        &:nth-child(2){
            grid-area:2/1/3/3;
        }
        &:nth-child(3){
            grid-area:3/1/4/3;
        }
        &:nth-child(4){
            grid-area:4/1/5/3;
        }
    }
 
`;