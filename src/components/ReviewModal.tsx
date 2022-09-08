import { faClose, faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addReview, getProduct } from "../app/data/actions";
import { initialStateType } from "../app/reducer/loginSlice";
import { useAppDispatch } from "../app/store/store";
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
  const {
    register,
    watch,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const { product } = useSelector((state: initialStateType) => state.products);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

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
            src={product[0] && product[0].imagine}
            alt={product[0] && product[0].imagine}
          />
          <ReviewModalSection>
            <ReviewModalItemTitle>
              Adauga un review pentru:
            </ReviewModalItemTitle>
            <ReviewModalItemName>
              {product[0] && product[0].nume}
            </ReviewModalItemName>
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

          {errors.name && (
            <p style={{ color: "red", marginTop: "0.3rem" }}>
              {/* @ts-ignore */}
              {errors.name.message}
            </p>
          )}
        </ReviewInputContainer>
        <ReviewInputContainer>
          <ReviewModalLabel>Review:</ReviewModalLabel>
          <ReviewTextarea {...register("comment")} />

          {errors.comment && (
            <p style={{ color: "red", marginTop: "0.3rem" }}>
              {/* @ts-ignore */}
              {errors.comment.message}
            </p>
          )}
        </ReviewInputContainer>
        <ReviewModalBtn
          onClick={() => {
            const review = [...product[0].review];
            if (watch().name.length <= 0) {
              setError("name", { message: "Name is required." });
              return;
            } else {
              clearErrors("name");
            }
            if (watch().comment.length <= 0) {
              setError("comment", { message: "Comment is required." });
              return;
            } else {
              clearErrors("comment");
            }
            review.push({
              rating: star === 0 ? 1 : star,
              name: watch().name,
              text: watch().comment,
            });

            dispatch(
              addReview({
                product: product[0].nume,
                review: review,
              })
            ).then((res) => {
              dispatch(
                getProduct(
                  pathname
                    .split("/")
                    [pathname.split("/").length - 1].replaceAll("-", " ")
                )
              );
            });
            setReviewModal(false);
          }}
        >
          Adauga review
        </ReviewModalBtn>
      </ReviewModalBox>
    </ReviewsModal>
  );
}

export default ReviewModal;
