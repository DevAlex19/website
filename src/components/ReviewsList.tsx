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
  return (
    <Reviews>
      <ReviewTitle>Review-uri</ReviewTitle>
      <ReviewsItem>
        <ReviewItemUser>
          <ReviewName>Gelu</ReviewName>
          <Rating />
        </ReviewItemUser>
        <ReviewText>
          fewgwegdddddgwggrgrfewgwegdddddgwggrgrfewgwegdddddgwggrgrfewgwegdddddgwggrgrfewgwegdddddgwggrgr
          fewgwegdddddgwggrgrfewgwegdddddgwggrgr
        </ReviewText>
      </ReviewsItem>
      <ReviewDivider />
      <ReviewsItem>
        <ReviewItemUser>
          <ReviewName>Gelu</ReviewName>
          <Rating />
        </ReviewItemUser>
        <ReviewText>
          fewgwegdddddgwggrgrfewgwegdddddgwggrgrfewgwegdddddgwggrgrfewgwegdddddgwggrgrfewgwegdddddgwggrgr
          fewgwegdddddgwggrgrfewgwegdddddgwggrgr
        </ReviewText>
      </ReviewsItem>
    </Reviews>
  );
}

export default ReviewsList;
