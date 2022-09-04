import { useEffect, useRef, useState } from "react";
import {
  ReviewBtn,
  ReviewContainer,
  ReviewNumber,
  ReviewRating,
  ReviewRatingContainer,
  ReviewSection,
  ReviewTitle,
} from "../styles/ProductStyles";
import Rating from "./Rating";
import ReviewModal from "./ReviewModal";

function Reviews() {
  const [reviewModal, setReviewModal] = useState(false);

  return (
    <ReviewContainer>
      <ReviewTitle>Review</ReviewTitle>
      <ReviewSection>
        <ReviewRatingContainer>
          <ReviewRating>5</ReviewRating>
          <Rating />
          <ReviewNumber>3 review-uri</ReviewNumber>
        </ReviewRatingContainer>
        <ReviewBtn
          onClick={(e: any) => {
            setReviewModal(true);
          }}
        >
          Adauga un review
        </ReviewBtn>
      </ReviewSection>
      <ReviewModal reviewModal={reviewModal} setReviewModal={setReviewModal} />
    </ReviewContainer>
  );
}

export default Reviews;
