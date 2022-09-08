import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
import {
  ReviewDivider,
  ReviewItemUser,
  ReviewName,
  Reviews,
  ReviewsItem,
  ReviewText,
  ReviewTitle,
} from "../styles/ProductStyles";
import Rating from "./Rating";

function ReviewsList() {
  const product = useSelector(
    (state: initialStateType) => state.products.product
  );

  return (
    <Reviews>
      {product[0] && product[0].review.length > 0 ? (
        <ReviewTitle>Review-uri</ReviewTitle>
      ) : null}

      {product[0] && product[0].review.length > 0
        ? product[0].review.map((item: any, index: number) => {
            return (
              <div key={index}>
                <ReviewsItem>
                  <ReviewItemUser>
                    <ReviewName>{item.name}</ReviewName>
                    <Rating rating={item.rating} />
                  </ReviewItemUser>
                  <ReviewText>{item.text}</ReviewText>
                </ReviewsItem>
                <ReviewDivider />
              </div>
            );
          })
        : null}
    </Reviews>
  );
}

export default ReviewsList;
