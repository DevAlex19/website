import {
  RatingContainer,
  RatingStars,
  Stars,
  StarsContainer,
  RatingNumber,
} from "../styles/SliderGalleryStyles";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating() {
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
        <StarsContainer>
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
      <RatingNumber>(2.4)</RatingNumber>
    </RatingContainer>
  );
}

export default Rating;
