import styled from "styled-components";

export const ForgotPasswordModal = styled.div`
  min-height: 550px;
  display: flex;
  justify-content: center;
`;

export const ForgotPasswordContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 300px;
`;
export const ForgotPasswordTitle = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 4.5rem;
`;
export const ForgotPasswordInputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
`;
export const ForgotPasswordLabel = styled.label`
  position: absolute;
  top: 10px;
  pointer-events: none;
  font-size: 1.3rem;
  color: rgb(107, 110, 104);
  transition: transform 0.5s, font-size 0.5s;
  &.focus {
    transform: translateY(-30px);
    font-size: 1.2rem;
  }
`;
export const ForgotPasswordInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  padding: 0.6rem 0;
  font-size: 1.3rem;
  outline: none;
  background: transparent;
`;
export const ForgotPasswordBtn = styled.button`
  background: none;
  cursor: pointer;
  border: 3px solid black;
  border-radius: 3px;
  padding: 0.8rem 0;
  font-size: 1.3rem;
  font-weight: 500;
  z-index: 0;
  position: relative;
  color: black;
  transition: background 0.5s, color 0.5s;
  &:hover {
    background: black;
    color: white;
  }
`;

export const ForgotPasswordMessage = styled.div`
  color: #e32636;
  font-size: 1.2rem;
  margin-top: 2rem;
`;
