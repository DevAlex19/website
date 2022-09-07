import Footer from "./Footer";
import Header from "./Header";

function ErrorPage() {
  return (
    <>
      <Header />
      <div
        style={{
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>Eroare 404</h2>
        <p style={{ fontSize: "1.5rem" }}>
          Aceasta pagina nu mai exista sau a fost mutata.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
