import { useState } from "react";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
import { ProductImageContainer } from "../styles/ProductStyles";

function ProductImage() {
  const [image, setImage] = useState({ zoom: 1, left: 0, top: 0 });
  const getImage = useSelector(
    (state: initialStateType) => state.products.product
  );

  function handleMouseOverImage(e: any) {
    const { left, top } = e.target.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setImage({ ...image, zoom: 2, left: -x, top: -y });
  }

  return (
    <ProductImageContainer
      onMouseMove={handleMouseOverImage}
      onMouseOut={() => setImage({ ...image, zoom: 1, left: 0, top: 0 })}
      zoom={image.zoom}
      left={image.left}
      top={image.top}
      image={getImage[0] && getImage[0].imagine}
    ></ProductImageContainer>
  );
}

export default ProductImage;
