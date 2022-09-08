import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
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
  const product = useSelector(
    (state: initialStateType) => state.products.product
  );
  let rating = 0;
  if (product[0]) {
    rating =
      product[0].review.reduce((res: number, acc: any) => {
        return res + acc.rating;
      }, 0) / product[0].review.length || 0;
  }

  return (
    <ReviewContainer>
      <ReviewTitle>Review</ReviewTitle>
      <ReviewSection>
        <ReviewRatingContainer>
          <ReviewRating>{rating}</ReviewRating>
          <Rating rating={rating} />
          <ReviewNumber>
            {product[0] && product[0].review.length} review-uri
          </ReviewNumber>
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
