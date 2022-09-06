import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
import {
  ProductContainer,
  ProductInfoCategory,
  ProductInfoContainer,
  ProductInfoName,
  ProductInfoSection,
  ProductInfoTitle,
  SectionContainer,
} from "../styles/ProductStyles";
import Loader from "./Loader";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import Reviews from "./Reviews";
import ReviewsList from "./ReviewsList";

function Product() {
  const product = useSelector(
    (state: initialStateType) => state.products.product
  );
  const { loading } = useSelector((state: initialStateType) => state.products);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProductContainer>
            <ProductImage />
            <ProductDetails />
          </ProductContainer>
          <SectionContainer>
            <ProductInfoContainer>
              <ProductInfoTitle>Informatii despre produs</ProductInfoTitle>
              <ProductInfoSection>
                <ProductInfoCategory>Tip produs:</ProductInfoCategory>
                <ProductInfoName>
                  {product[0] && product[0]["tip produs"]}
                </ProductInfoName>
              </ProductInfoSection>
              <ProductInfoSection>
                <ProductInfoCategory>Categorie:</ProductInfoCategory>
                <ProductInfoName>
                  {product[0] && product[0].categorie}
                </ProductInfoName>
              </ProductInfoSection>
              <ProductInfoSection>
                <ProductInfoCategory>Culoare:</ProductInfoCategory>
                <ProductInfoName>
                  {product[0] && product[0].culoare}
                </ProductInfoName>
              </ProductInfoSection>
              <ProductInfoSection>
                <ProductInfoCategory>Echipa:</ProductInfoCategory>
                <ProductInfoName>
                  {product[0] && product[0].echipa}
                </ProductInfoName>
              </ProductInfoSection>
              <ProductInfoSection>
                <ProductInfoCategory>Nume:</ProductInfoCategory>
                <ProductInfoName>
                  {product[0] && product[0].nume}
                </ProductInfoName>
              </ProductInfoSection>
              <ProductInfoSection>
                <ProductInfoCategory>Producator:</ProductInfoCategory>
                <ProductInfoName>
                  {product[0] && product[0].producator}
                </ProductInfoName>
              </ProductInfoSection>
            </ProductInfoContainer>
            <Reviews />
          </SectionContainer>
          <ReviewsList />
        </>
      )}
    </>
  );
}

export default Product;
