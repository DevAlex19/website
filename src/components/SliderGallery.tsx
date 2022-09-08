import React, { useState, useEffect } from "react";
import {
  SliderContainer,
  SliderItem,
  Image,
  Title,
  Price,
  RatingContainer,
  RatingStars,
  Stars,
  RatingNumber,
  SliderItems,
  Arrow,
  StarsContainer,
  SliderTitle,
} from "../styles/SliderGalleryStyles";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Rating from "./Rating";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
import { useNavigate } from "react-router-dom";

function SliderGallery() {
  const { sliderProducts } = useSelector((state: initialStateType) => state);
  const [slider, setSlider] = useState<any>({
    cards: [],
    direction: "",
    current: 1,
    transition: true,
  });
  useEffect(() => {
    setSlider({ ...slider, cards: [...sliderProducts] });
  }, [sliderProducts]);
  const navigate = useNavigate();

  function handleTransitionEnd() {
    const { direction } = slider;
    switch (direction) {
      case "right":
        nextSlide();
        break;
      case "left":
        prevSlide();
        break;
      default:
        break;
    }
  }

  function nextSlide() {
    const { current, cards } = slider;
    let newCurrent = current - 1;
    const newCards = [...cards.slice(1), cards[0]];
    setSlider({
      ...slider,
      cards: newCards,
      current: newCurrent,
      transition: false,
    });
  }

  function prevSlide() {
    const { current, cards } = slider;
    let newCurrent = current + 1;
    const newCards = [
      cards[cards.length - 1],
      ...cards.slice(0, cards.length - 1),
    ];
    setSlider({
      ...slider,
      cards: newCards,
      current: newCurrent,
      transition: false,
    });
  }

  return (
    <SliderContainer>
      <SliderTitle>Produse</SliderTitle>
      <SliderItems
        onTransitionEnd={handleTransitionEnd}
        width={slider.current}
        transition={slider.transition}
        className="sliderContainer"
      >
        {slider.cards.map((item: any, index: number) => {
          const { imagine, nume, pret, review } = item;
          let rating =
            review.reduce((res: number, acc: any) => {
              return res + acc.rating;
            }, 0) / review.length || 0;
          return (
            <SliderItem
              key={index}
              onClick={() => {
                navigate(`/p/${nume.replaceAll(" ", "-")}`);
              }}
            >
              <Image src={imagine} alt={imagine} />
              <Title>{nume.length > 10 ? nume + "..." : nume}</Title>
              <Price>{pret} lei</Price>
              <Rating rating={rating} />
            </SliderItem>
          );
        })}
      </SliderItems>
      {
        <Arrow
          className="left"
          onClick={() => {
            const { current } = slider;
            let newCurrent = current - 1;
            if (current === 0) return;
            setSlider({
              ...slider,
              current: newCurrent,
              direction: "left",
              transition: true,
            });
          }}
          icon={faChevronLeft}
        ></Arrow>
      }
      {
        <Arrow
          className="right"
          onClick={() => {
            const { current, cards } = slider;
            let newCurrent = current + 1;
            if (newCurrent >= cards.length - 3) return;
            setSlider({
              ...slider,
              current: newCurrent,
              direction: "right",
              transition: true,
            });
          }}
          icon={faChevronRight}
        ></Arrow>
      }
    </SliderContainer>
  );
}

export default SliderGallery;
