import { faClose } from "@fortawesome/free-solid-svg-icons";
import {
  AddBtn,
  BackBtn,
  CloseModal,
  ModalBtnsContainer,
  ModalContainer,
  ModalImage,
  ModalItemName,
  ModalItemPrice,
  ModalItemQuantity,
  ModalItemSize,
  ModalProduct,
  ModalSection,
  ModalTitle,
} from "../styles/ProductStyles";

function ProductModal() {
  return (
    <ModalContainer>
      <ModalTitle></ModalTitle>
      <ModalProduct>
        <ModalImage src="" />
        <ModalSection>
          <ModalItemName></ModalItemName>
          <ModalItemSize></ModalItemSize>
          <ModalItemQuantity></ModalItemQuantity>
          <ModalItemPrice></ModalItemPrice>
        </ModalSection>
      </ModalProduct>
      <ModalBtnsContainer>
        <BackBtn></BackBtn>
        <AddBtn></AddBtn>
      </ModalBtnsContainer>
      <CloseModal icon={faClose} />
    </ModalContainer>
  );
}
export default ProductModal;
