import { useForm } from "react-hook-form";
import { CartPageContainer } from "../styles/CartPageStyles";
import {
  CheckoutContactContainer,
  CheckoutContactInput,
  CheckoutContactInputContainer,
  CheckoutContactLabel,
  CheckoutContactSection,
  CheckoutContactTitle,
  CheckoutContactTotalPrice,
} from "../styles/CheckoutContact";
import {
  TotalPriceSection,
  TotalPrice,
  MainButton,
  BackButton,
} from "../styles/CartPageStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { CartDivider } from "../styles/CartStyles";
import { useState } from "react";
import onSubmit from "../app/helperFunctions/checkoutErrors";
import { CheckoutHeader } from "./CheckoutHeader";

function CheckoutContact({ page, setPage }: CheckoutHeader) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  const { register, handleSubmit } = useForm();

  return (
    <CartPageContainer>
      <CheckoutContactContainer>
        <CheckoutContactTitle>Date contact</CheckoutContactTitle>
        <CartDivider />

        <CheckoutContactInputContainer>
          <CheckoutContactLabel>Nume si prenume *</CheckoutContactLabel>
          <CheckoutContactInput {...register("name")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.name}</p>
        </CheckoutContactInputContainer>
        <CheckoutContactSection>
          <CheckoutContactInputContainer>
            <CheckoutContactLabel>Adresa de e-mail *</CheckoutContactLabel>
            <CheckoutContactInput {...register("email")} />
            <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.email}</p>
          </CheckoutContactInputContainer>
          <CheckoutContactInputContainer>
            <CheckoutContactLabel>Numar de telefon *</CheckoutContactLabel>
            <CheckoutContactInput {...register("phone")} />
            <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.phone}</p>
          </CheckoutContactInputContainer>
        </CheckoutContactSection>
        <CheckoutContactInputContainer>
          <CheckoutContactLabel>Adresa *</CheckoutContactLabel>
          <CheckoutContactInput {...register("address")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.address}</p>
        </CheckoutContactInputContainer>
        <CheckoutContactSection>
          <CheckoutContactInputContainer>
            <CheckoutContactLabel>Judetul *</CheckoutContactLabel>
            <CheckoutContactInput {...register("county")} />
            <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.county}</p>
          </CheckoutContactInputContainer>
          <CheckoutContactInputContainer>
            <CheckoutContactLabel>Localitate *</CheckoutContactLabel>
            <CheckoutContactInput {...register("town")} />
            <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.town}</p>
          </CheckoutContactInputContainer>
        </CheckoutContactSection>
        <CheckoutContactInputContainer>
          <CheckoutContactLabel>Cod Postal *</CheckoutContactLabel>
          <CheckoutContactInput {...register("code")} />
          <p style={{ color: "red", fontSize: "0.8rem" }}>{errors.code}</p>
        </CheckoutContactInputContainer>
      </CheckoutContactContainer>
      <CheckoutContactTotalPrice>
        <TotalPriceSection>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p>Total:</p>
            <TotalPrice>23242 lei</TotalPrice>
          </div>
          <MainButton
            onClick={handleSubmit((data) =>
              onSubmit(data, { setErrors, setPage, page })
            )}
          >
            Continua
          </MainButton>
        </TotalPriceSection>
        <BackButton onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faChevronLeft} /> Inapoi la magazin
        </BackButton>
      </CheckoutContactTotalPrice>
    </CartPageContainer>
  );
}

export default CheckoutContact;
