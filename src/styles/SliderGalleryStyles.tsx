import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SliderContainer = styled.div`
    width:70%;
    margin:0 auto;
    height:540px;
    margin-top:9rem;
    position:relative;
    overflow:hidden;
    @media (max-width:1400px){
        height:450px;
    }
`;
export const SliderItems = styled.div<{move?:number,width:number,active?:boolean,inactive?:boolean}>`
    display:flex;
    height:100%;
    justify-content:${({width}) => width ===  1 ? 'flex-end' : 'flex-start'};
    transform:translateX(${({width}) => width + 'px'});
    transition:${({active,inactive}) => active === true && inactive === true ? 'none' : 'transform 0.5s'};
`;

export const SliderItem = styled.div`
    flex-basis: 300px;
    flex-grow: 0;
    flex-shrink: 0;
    cursor:pointer;
    margin-left:30px;
    @media (max-width:1400px){
        flex-basis:300px;
        flex-grow: 0;
        flex-shrink: 0;
    }
`;
export const Image = styled.img`
    width:100%;
    height:320px;
    object-fit:cover;
    @media (max-width:1400px){
        height:220px;
    }
`;
export const Title = styled.p`
    text-transform:uppercase;
    margin-top:1rem;
    font-size:1.2rem;
`;
export const Price = styled.p`
    font-weight:bold;
    margin-top:0.3rem;
    font-size:1.2rem;
`;

export const Arrow = styled(FontAwesomeIcon)`
    position:absolute;
    top:50%;
    color:black;
    cursor:pointer;
    font-size:3.5rem;
    transform:translateY(-50%);
    transition:color 0.3s;
    &.left{
        left:35px;
    }
    &.right{
        right:35px;
    }
    &:hover{
        color:#e32636;
    }
`;
export const RatingContainer = styled.div`
    margin-top:0.4rem;
    display:flex;
    align-items:center;
`;
export const RatingStars = styled.div`
    position:relative;
    display:inline-block;
`;
export const StarsContainer = styled.div`
    display:flex;
    position:absolute;
    overflow:hidden;
    top:0;
    width:0%;
    left:0;
`;
export const Stars = styled(FontAwesomeIcon)`
    font-size:1.3rem;
`;
export const RatingNumber = styled.p`
    margin-left:0.4rem;
`;
export const SliderTitle = styled.div`
    text-align:center;
    text-transform:uppercase;
    margin-bottom:5rem;
    font-size:1.8rem;
`;