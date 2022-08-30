import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FilterProductsContainer = styled.div`
    width:25%;
`;

export const FilterContainer = styled.div`
    background:white;
    box-shadow:1px 1px 5px #E0DECA;
    margin-bottom:0.4rem;
`
export const FilterTitleContainer = styled.div`
    background:#e0e0e0;
    display:flex;
    justify-content:space-between;
    padding:1rem;
    text-transform:uppercase;
    font-size:0.9rem;
    cursor:pointer;
`;
export const FilterTitle = styled.p``
export const FilterArrow = styled(FontAwesomeIcon)`
    transition:transform 0.3s;
    &.expand{
        transform:rotate(180deg);
    }
`;
export const FilterItems = styled.div<{ type?: string }>`
    display:flex;
    flex-direction:${({ type }) => type === 'column' ? 'column' : 'row'};
    flex-wrap:${({ type }) => type === 'column' ? 'nowrap' : 'wrap'};;
    overflow-y:scroll;
    transition:max-height 0.4s, padding 0.4s;
    max-height:0px;
    &.expand{
        max-height:200px;
    }
    ::-webkit-scrollbar { 
        display: none;
    }
`;
export const FilterItem = styled.div<{ active?: string }>`
    background:${({ active }) => active ? '#999999' : '#e0e0e0'};
    padding:0.5rem 1rem;
    cursor:pointer;
    transition:0.3s;
    margin:0.8rem;
    flex:1;
    text-align:center;
    &:hover{
        background:#bcbcbc;
    }
    
`;

export const ProducerItemContainer = styled.div`
    display:flex;
    align-items:center;
    column-gap:8px;
    margin-top:0.8rem;
    margin-left:0.8rem;
    &:last-child{
        margin-bottom:0.8rem;
    }
`;
export const CheckBoxContainer = styled.div`
    background:#e0e0e0;
    border-radius:50%;
    width:18px;
    height:18px;
    position:relative;
    cursor:pointer;
`;
export const Checkbox = styled(FontAwesomeIcon)`
    position:absolute;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    transform:scale(0.7);
`;
export const ProducerItem = styled.div`
    cursor:pointer;
`;

export const InputContainer = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin-top:1rem;
`;
export const Input = styled.input`
    width:100px;
    outline:none;
    border:none;
    border:1px solid #999999;
    padding:0.5rem;
    font-size:1rem;
    text-align:center;
`;
export const InputLine = styled.div`
    font-size:1.5rem;
`