import CartPage from "./CartPage";
import CheckoutHeader from "./CheckoutHeader";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { CheckoutContainer } from "../styles/CartPageStyles";
import CheckoutContact from "./CheckoutContact";
import CheckoutFinal from "./CheckoutFinal";

function Checkout() {
  const [page, setPage] = useState({ value: 0, pages: ["cos"] });
  function renderPage() {
    switch (page.value) {
      case 0:
        return <CartPage page={page} setPage={setPage} />;
      case 1:
        return <CheckoutContact page={page} setPage={setPage} />;
      case 2:
        return <CheckoutFinal page={page} setPage={setPage} />;
    }
  }
  return (
    <>
      <Header />
      <CheckoutContainer>
        <CheckoutHeader page={page} setPage={setPage} />
        {renderPage()}
      </CheckoutContainer>
      <Footer />
    </>
  );
}

export default Checkout;
