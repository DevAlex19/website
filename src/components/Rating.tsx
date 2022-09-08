import {
  RatingContainer,
  RatingStars,
  Stars,
  StarsContainer,
  RatingNumber,
} from "../styles/SliderGalleryStyles";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }: any) {
  const percetage = ((rating - 0) / (5 - 0)) * 100 + "%";
  return (
    <RatingContainer>
      <RatingStars>
        {Array.from(Array(5).keys()).map((item, index) => {
          return (
            <Stars
              style={{ color: "rgb(220,220,220)" }}
              key={index}
              icon={faStar}
            ></Stars>
          );
        })}
        <StarsContainer width={percetage}>
          {Array.from(Array(5).keys()).map((item, index) => {
            return (
              <Stars
                style={{ color: "rgb(255, 191, 0)" }}
                key={index}
                icon={faStar}
              ></Stars>
            );
          })}
        </StarsContainer>
      </RatingStars>
      <RatingNumber>({rating})</RatingNumber>
    </RatingContainer>
  );
}

export default Rating;
