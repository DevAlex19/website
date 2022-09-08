import {
  ProductImage,
  ProductsItem,
  ProductTitle,
  ProductPrice,
} from "../styles/ProductsListStyles";
import { ProductsListContainer } from "../styles/ProductsStyles";
import {
  RatingContainer,
  RatingStars,
  Stars,
  StarsContainer,
  RatingNumber,
} from "../styles/SliderGalleryStyles";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
import { useNavigate } from "react-router-dom";
import { reduceEachLeadingCommentRange } from "typescript";
import { filterProducts } from "../app/selectors/filterProducts";

function Products({ filters }: any) {
  const navigate = useNavigate();
  const products = useSelector((state: initialStateType) =>
    filterProducts(state, filters)
  );

  return (
    <ProductsListContainer>
      {products.map(({ imagine, nume, pret, review }: any, index: number) => {
        let rating =
          review.reduce((res: number, acc: any) => {
            return res + acc.rating;
          }, 0) / review.length || 0;
        const percetage = ((rating - 0) / (5 - 0)) * 100 + "%";
        return (
          <ProductsItem
            key={index}
            onClick={() => navigate(`/p/${nume.replaceAll(" ", "-")}`)}
          >
            <div style={{ height: "250px" }}>
              <ProductImage src={imagine} alt={imagine} />
            </div>
            <div style={{ padding: "0 0.5rem 1rem" }}>
              <ProductTitle>{nume}</ProductTitle>
              <ProductPrice>{pret} lei</ProductPrice>
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
            </div>
          </ProductsItem>
        );
      })}
    </ProductsListContainer>
  );
}

export default Products;
