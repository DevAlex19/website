import {
  ProductContainer,
  ProductInfoCategory,
  ProductInfoContainer,
  ProductInfoName,
  ProductInfoSection,
  ProductInfoTitle,
  SectionContainer,
} from "../styles/ProductStyles";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import Reviews from "./Reviews";
import ReviewsList from "./ReviewsList";

function Product() {
  return (
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
            <ProductInfoName>Ghete de fotbal</ProductInfoName>
          </ProductInfoSection>
          <ProductInfoSection>
            <ProductInfoCategory>Tip produs:</ProductInfoCategory>
            <ProductInfoName>Ghete de fotbal</ProductInfoName>
          </ProductInfoSection>
          <ProductInfoSection>
            <ProductInfoCategory>Tip produs:</ProductInfoCategory>
            <ProductInfoName>Ghete de fotbal</ProductInfoName>
          </ProductInfoSection>
          <ProductInfoSection>
            <ProductInfoCategory>Tip produs:</ProductInfoCategory>
            <ProductInfoName>Ghete de fotbal</ProductInfoName>
          </ProductInfoSection>
          <ProductInfoSection>
            <ProductInfoCategory>Tip produs:</ProductInfoCategory>
            <ProductInfoName>Ghete de fotbal</ProductInfoName>
          </ProductInfoSection>
        </ProductInfoContainer>
        <Reviews />
      </SectionContainer>
      <ReviewsList />
    </>
  );
}

export default Product;
