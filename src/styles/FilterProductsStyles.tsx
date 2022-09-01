import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const FilterProductsContainer = styled.div<{ show: boolean }>`
  width: 25%;
  @media (max-width: 860px) {
    display: ${({ show }) => (show === true ? "block" : "none")};
    position: absolute;
    top: 0;
    background: white;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 4rem;
  }
`;
export const FilterBtn = styled.button`
  display: none;
  cursor: pointer;
  margin: 3rem auto 0;
  border: none;
  background: black;
  color: white;
  border: 1px solid black;
  padding: 0.8rem;
  font-size: 1.1rem;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: white;
    color: black;
  }
  @media (max-width: 860px) {
    display: block;
  }
`;
export const CloseFilter = styled(FontAwesomeIcon)`
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 2rem;
  display: none;
  color: #3a3c3d;
  transition: color 0.3s;
  cursor: pointer;
  &:hover {
    color: black;
  }
  @media (max-width: 860px) {
    display: block;
  }
`;

export const FilterContainer = styled.div`
  background: white;
  box-shadow: 1px 1px 5px #e0deca;
  margin-bottom: 0.4rem;
`;
export const FilterTitleContainer = styled.div`
  background: #e0e0e0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
`;
export const FilterTitle = styled.p``;
export const FilterArrow = styled(FontAwesomeIcon)`
  transition: transform 0.3s;
  &.expand {
    transform: rotate(180deg);
  }
`;
export const FilterItems = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: ${({ type }) => (type === "column" ? "column" : "row")};
  flex-wrap: ${({ type }) => (type === "column" ? "nowrap" : "wrap")};
  overflow-y: scroll;
  transition: max-height 0.4s, padding 0.4s;
  max-height: 0px;
  &.expand {
    max-height: 200px;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const FilterItem = styled.div<{ active?: string }>`
  background: ${({ active }) => (active ? "#999999" : "#e0e0e0")};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.3s;
  margin: 0.8rem;
  flex: 1;
  text-align: center;
  &:hover {
    background: #bcbcbc;
  }
`;

export const ProducerItemContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-top: 0.8rem;
  margin-left: 0.8rem;
  &:last-child {
    margin-bottom: 0.8rem;
  }
`;
export const CheckBoxContainer = styled.div`
  background: #e0e0e0;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  position: relative;
  cursor: pointer;
`;
export const Checkbox = styled(FontAwesomeIcon)`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: scale(0.7);
`;
export const ProducerItem = styled.div`
  cursor: pointer;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1rem;
`;
export const Input = styled.input`
  width: 100px;
  outline: none;
  border: none;
  border: 1px solid #999999;
  padding: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;
export const InputLine = styled.div`
  font-size: 1.5rem;
`;

export const RangeSliderContainer = styled.div`
  background: #999999;
  width: 90%;
  height: 5px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 1.8rem;
  position: relative;
  margin-bottom: 3rem;
`;

export const Tooltip = styled.div<{ left: string }>`
  position: absolute;
  background: black;
  width: 30px;
  height: 30px;
  top: -45px;
  left: ${({ left }) => left};
  transform: translateX(-50%);
  color: white;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:before {
    position: absolute;
    content: "";
    border-top: 5px solid black;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    top: 100%;
  }
`;
export const TooltipContainer = styled.div`
  &:hover ${Tooltip} {
    display: flex;
  }
`;
export const Handle = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: none;
  border-radius: 10px;
  pointer-events: none;
  &::-webkit-slider-thumb {
    margin-top: -4px;
    pointer-events: auto;
    cursor: pointer;
    -webkit-appearance: none;
    background: #e32636;
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  &::-webkit-slider-runnable-track {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
export const HandleContainer = styled.div<{ width: string; left: string }>`
  position: absolute;
  width: ${({ width }) => width};
  background: black;
  height: 100%;
  left: ${({ left }) => left};
  border-radius: 10px;
`;
