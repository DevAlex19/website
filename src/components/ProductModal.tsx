import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { initialStateType } from "../app/reducer/loginSlice";
import {
  AddBtn,
  BackBtn,
  CloseModal,
  ModalBtnsContainer,
  ModalCartSection,
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

type ProductModalType = {
  addCartModal: boolean;
  setAddCartModal: any;
  sizes: string;
  quantity: number;
};

function ProductModal({
  addCartModal,
  setAddCartModal,
  sizes,
  quantity,
}: ProductModalType) {
  const navigate = useNavigate();
  const { product } = useSelector((state: initialStateType) => state.products);

  return (
    <ModalContainer open={addCartModal} onClick={() => setAddCartModal(false)}>
      <ModalCartSection
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <ModalTitle>Produsul a fost adaugat in cos</ModalTitle>
        <ModalProduct>
          <ModalImage
            src={product[0] && product[0].imagine}
            alt={product[0] && product[0].imagine}
          />
          <ModalSection>
            <ModalItemName>{product[0] && product[0].nume}</ModalItemName>
            <ModalItemSize>DIMENSIUNE: {sizes.toUpperCase()}</ModalItemSize>
            <ModalItemQuantity>
              CANTITATEA: {quantity < 0 ? 0 : quantity}
            </ModalItemQuantity>
            <ModalItemPrice>
              {product[0] && product[0].pret * quantity} lei
            </ModalItemPrice>
          </ModalSection>
        </ModalProduct>
        <ModalBtnsContainer>
          <BackBtn onClick={() => navigate("/")}>
            Revenire la cumparaturi
          </BackBtn>
          <AddBtn onClick={() => navigate("/checkout")}>Treci catre cos</AddBtn>
        </ModalBtnsContainer>
        <CloseModal onClick={() => setAddCartModal(false)} icon={faClose} />
      </ModalCartSection>
    </ModalContainer>
  );
}
export default ProductModal;
