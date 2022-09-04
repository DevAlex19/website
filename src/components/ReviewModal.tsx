import { faClose, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  CloseModal,
  ReviewInputContainer,
  ReviewModalBox,
  ReviewModalBtn,
  ReviewModalInput,
  ReviewModalItemContainer,
  ReviewModalItemImage,
  ReviewModalItemName,
  ReviewModalItemTitle,
  ReviewModalLabel,
  ReviewModalSection,
  ReviewModalTitle,
  ReviewsModal,
  ReviewStar,
  ReviewStars,
  ReviewStarsContainer,
  ReviewTextarea,
} from "../styles/ProductStyles";

type ReviewModalType = {
  reviewModal: boolean;
  setReviewModal: any;
};

function ReviewModal({ reviewModal, setReviewModal }: ReviewModalType) {
  const [star, setStar] = useState(0);
  const starRating = useRef(0);
  const { register, watch } = useForm();

  //@ts-ignore
  useEffect(() => {
    if (reviewModal) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "auto");
  }, [reviewModal]);

  return (
    <ReviewsModal onClick={() => setReviewModal(false)} open={reviewModal}>
      <ReviewModalBox onClick={(e: any) => e.stopPropagation()}>
        <CloseModal icon={faClose} onClick={() => setReviewModal(false)} />
        <ReviewModalItemContainer>
          <ReviewModalItemImage
            src="data:image/jpeg;base64,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"
            alt={""}
          />
          <ReviewModalSection>
            <ReviewModalItemTitle>
              Adauga un review pentru:
            </ReviewModalItemTitle>
            <ReviewModalItemName>isjidjsijsdijsji</ReviewModalItemName>
          </ReviewModalSection>
        </ReviewModalItemContainer>
        <ReviewStarsContainer>
          <ReviewStars>
            {[1, 2, 3, 4, 5].map((item, index) => {
              return (
                <ReviewStar
                  color={star >= index + 1 ? "yellow" : "#dcdcdc"}
                  key={index}
                  onMouseOver={() => setStar(index + 1)}
                  onMouseOut={() => setStar(starRating.current)}
                  onClick={() => {
                    starRating.current = index + 1;
                    setStar(index + 1);
                  }}
                  icon={faStar}
                />
              );
            })}
          </ReviewStars>
          <ReviewModalTitle>Acorda o nota</ReviewModalTitle>
        </ReviewStarsContainer>
        <ReviewInputContainer>
          <ReviewModalLabel>Nume:</ReviewModalLabel>
          <ReviewModalInput {...register("name")} />
        </ReviewInputContainer>
        <ReviewInputContainer>
          <ReviewModalLabel>Review:</ReviewModalLabel>
          <ReviewTextarea {...register("comment")} />
        </ReviewInputContainer>
        <ReviewModalBtn>Adauga review</ReviewModalBtn>
      </ReviewModalBox>
    </ReviewsModal>
  );
}

export default ReviewModal;
