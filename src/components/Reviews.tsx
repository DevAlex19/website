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
  const [top, setTop] = useState(0);
  const modalRef = useRef<any>(null);

  //@ts-ignore
  useEffect(() => {
    // if (reviewModal) {
    //   document.body.style.overflow = "hidden";
    // }
    function handleClickOutside(e: any) {
      if (reviewModal && !modalRef.current.contains(e.target)) {
        setReviewModal(false);
      }
    }
    console.log("reviews");
    window.addEventListener("click", handleClickOutside);
    return () => {
      // document.body.style.overflow = "auto";
      window.removeEventListener("click", handleClickOutside);
    };
  }, [reviewModal]);

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
          onClick={() => {
            const scrollTop =
              document.body.scrollTop || document.documentElement.scrollTop;
            setTop(scrollTop);
            setReviewModal(true);
          }}
        >
          Adauga un review
        </ReviewBtn>
      </ReviewSection>
      <ReviewModal
        reviewModal={reviewModal}
        setReviewModal={setReviewModal}
        top={top}
        modalRef={modalRef}
      />
    </ReviewContainer>
  );
}

export default Reviews;
