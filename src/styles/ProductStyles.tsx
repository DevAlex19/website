import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 4rem;
  display: flex;
  column-gap: 5rem;
  @media (max-width: 1020px) {
    column-gap: 2rem;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    width: 95%;
  }
`;
export const ProductImageContainer = styled.div<{
  zoom: number;
  left: number;
  top: number;
  image: string;
}>`
  background: url(${({ image }) => image});
  width: 50%;
  min-width: 400px;
  cursor: zoom-in;
  min-height: 500px;
  background-repeat: no-repeat;
  background-size: calc(${({ zoom }) => zoom * 100 + "%"});
  background-position: ${({ left }) => left + "px"} ${({ top }) => top + "px"};

  @media (max-width: 950px) {
    min-width: 300px;
    height: auto;
    flex: 1;
  }
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    min-height: 600px;
  }
  @media (max-width: 590px) {
    min-height: 500px;
    height: auto;
  }
  @media (max-width: 490px) {
    min-height: 400px;
    height: auto;
  }
  @media (max-width: 390px) {
    min-height: 300px;
    height: auto;
  }
`;
export const ProductSection = styled.div`
  width: 50%;
  @media (max-width: 800px) {
    width: 100%;
    margin-top: 2rem;
  }
`;
export const ProductName = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
`;
export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1.3rem 0 1rem;
`;

export const ProductSizeContainer = styled.div`
  margin-top: 4rem;
`;
export const ProductSizeTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;
export const ProductSizeItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
export const ProductSize = styled.p<{ color: string }>`
  border: 1px solid black;
  font-size: 1.1rem;
  padding: 0.8rem 1.3rem;
  cursor: pointer;
  background: ${({ color }) => (color === "true" ? "black" : "white")};
  color: ${({ color }) => (color === "true" ? "white" : "black")};
`;
export const ProductButtonContainer = styled.div`
  background: black;
  height: 50px;
  width: 200px;
  cursor: pointer;
  margin-top: 2.5rem;
  position: relative;
  overflow: hidden;
  border: 1px solid black;
`;
export const ProductButtonSection = styled.div<{ error: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
  transform: translateY(${({ error }) => (error === true ? "-48px" : "0")});
`;
export const ProductButton = styled.button`
  background: none;
  border: none;
  color: white;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    color: black;
    background: white;
  }
`;

export const ProductInfoContainer = styled.div`
  width: 50%;
`;
export const ProductInfoTitle = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;
export const ProductInfoSection = styled.div`
  display: flex;
  margin-bottom: 0.7rem;
`;
export const ProductInfoCategory = styled.p`
  color: #969389;
`;
export const ProductInfoName = styled.p`
  margin-left: 0.5rem;
`;

export const ReviewContainer = styled.div`
  width: 50%;
  @media (max-width: 930px) {
    margin-top: 3rem;
    width: 100%;
  }
`;
export const ReviewTitle = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;
export const ReviewSection = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1225px) {
    flex-direction: column;
  }
  @media (max-width: 930px) {
    flex-direction: row;
    justify-content: space-between;
    column-gap: 20px;
  }
`;
export const ReviewRatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReviewRating = styled.p`
  font-size: 2.5rem;
  font-weight: 600;
`;
export const ReviewNumber = styled.p`
  color: #888fa7;
  margin-top: 0.8rem;
`;
export const ReviewBtn = styled.button`
  border: 1px solid black;
  background: black;
  color: white;
  font-size: 1.2rem;
  padding: 0.8rem;
  margin-left: 3rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: white;
    color: black;
  }
  @media (max-width: 1225px) {
    margin-left: 0;
    margin-top: 1.5rem;
  }
`;
export const SectionContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 0 auto;
  column-gap: 5rem;
  margin-top: 6rem;
  @media (max-width: 930px) {
    flex-direction: column;
    width: 95%;
  }
`;

export const ReviewsModal = styled.div<{ open: boolean }>`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ open }) => (open === true ? "block" : "none")};
  border-radius: 5px;
  z-index: 10;
`;
export const ReviewModalBox = styled.div`
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  width: 400px;
  @media (max-width: 480px) {
    width: 90%;
  }
`;
export const ReviewModalItemContainer = styled.div`
  display: flex;
  column-gap: 15px;
  margin-top: 2rem;
`;
export const ReviewModalItemImage = styled.img`
  width: 100px;
`;
export const ReviewModalSection = styled.div``;
export const ReviewModalItemName = styled.p`
  margin-top: 0.4rem;
`;
export const ReviewModalItemTitle = styled.p``;
export const ReviewStarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
`;
export const ReviewStars = styled.div``;
export const ReviewModalTitle = styled.p`
  font-size: 1.1rem;
  margin-left: 1.2rem;
`;
export const ReviewInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
`;
export const ReviewModalLabel = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;
export const ReviewModalInput = styled.input`
  font-size: 1rem;
  outline: none;
  padding: 0.5rem;
`;
export const ReviewTextarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  resize: none;
  outline: none;
  min-height: 120px;
`;
export const ReviewModalBtn = styled.button`
  background: black;
  color: white;
  display: block;
  margin: 2rem auto 1rem;
  border: 1px solid black;
  font-size: 1.2rem;
  padding: 0.6rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: white;
    color: black;
  }
`;
export const ReviewStar = styled(FontAwesomeIcon)<{ color: string }>`
  color: ${({ color }) => color};
  cursor: pointer;
  font-size: 1.4rem;
  :not(:first-child) {
    margin-left: 0.3rem;
  }
`;

export const Reviews = styled.div`
  width: 70%;
  margin: 0 auto;
  margin: 5rem auto;
  @media (max-width: 930px) {
    width: 95%;
  }
`;
export const ReviewsItem = styled.div`
  display: flex;
  @media (max-width: 630px) {
    flex-direction: column;
  }
`;
export const ReviewDivider = styled.div`
  width: 100%;
  height: 1px;
  background: #e5e5e5;
  margin: 1.5rem 0;
`;

export const ReviewItemUser = styled.div``;
export const ReviewName = styled.div``;
export const ReviewText = styled.p`
  margin-left: 2rem;
  display: block;
  word-break: break-all;
  max-width: 400px;
  @media (max-width: 630px) {
    margin: 0;
    margin-top: 1rem;
  }
`;

export const ModalContainer = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open === true ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;
export const CloseModal = styled(FontAwesomeIcon)`
  position: absolute;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  top: 20px;
`;
export const ModalCartSection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 600px;
  padding: 2rem;
  @media (max-width: 660px) {
    width: 90%;
  }
`;
export const ModalTitle = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  @media (max-width: 500px) {
    margin-right: 1rem;
  }
`;
export const ModalProduct = styled.div`
  display: flex;
  margin-top: 3rem;
  @media (max-width: 540px) {
    flex-direction: column;
  }
`;
export const ModalImage = styled.img`
  width: 200px;
  @media (max-width: 660px) {
    min-width: 100px;
    object-fit: cover;
  }
`;
export const ModalSection = styled.div`
  margin-left: 1.3rem;
  @media (max-width: 540px) {
    margin-top: 1.3rem;
  }
`;
export const ModalItemName = styled.p`
  font-size: 1.1rem;
  font-weight: 700;
`;
export const ModalItemSize = styled.p`
  color: #727289;
  font-size: 0.9rem;
  margin-top: 0.6rem;
`;
export const ModalItemQuantity = styled.p`
  color: #727289;
  font-size: 0.9rem;
  margin-top: 0.4rem;
`;
export const ModalItemPrice = styled.p`
  margin-top: 2rem;
  font-size: 1.3rem;
  font-weight: 700;
`;
export const ModalBtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;
export const BackBtn = styled.button`
  background: none;
  border: none;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
  @media (max-width: 500px) {
    margin-top: 2rem;
  }
`;
export const AddBtn = styled.button`
  background: black;
  border: 1px solid black;
  text-transform: uppercase;
  font-size: 0.9rem;
  cursor: pointer;
  color: white;
  padding: 0.7rem 1rem;
  transition: color 0.3s, background 0.3s;
  &:hover {
    background: white;
    color: black;
  }
`;
