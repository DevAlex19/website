import {
  faEnvelopeOpenText,
  faCartShopping,
  faChevronRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  CheckoutHeaderContainer,
  CheckoutHeaderIcon,
  CheckoutHeaderItem,
  CheckoutHeaderItemBox,
  CheckoutHeaderItemContainer,
  CheckoutIcon,
  CheckoutItemTitle,
} from "../styles/CheckoutHeaderStyles";

export type CheckoutHeader = {
  page: any;
  setPage: any;
};

function CheckoutHeader({ page, setPage }: CheckoutHeader) {
  return (
    <CheckoutHeaderContainer>
      {["cos", "date contact", "plata"].map((item, index) => {
        return (
          <CheckoutHeaderItemContainer
            key={index}
            width={item !== "plata" ? "250" : ""}
          >
            <CheckoutHeaderItemBox
              color={page.pages.includes(item) ? "#e33036" : "black"}
              onClick={() => {
                if (
                  !page.pages.includes(item) ||
                  page.pages[page.pages.length - 1] === item
                )
                  return;
                setPage({
                  ...page,
                  value: index,
                  pages: ["cos", "date contact", "place"].slice(0, index + 1),
                });
                console.log(page);
              }}
            >
              <CheckoutHeaderItem
                color={page.pages.includes(item) ? "#e33036" : "black"}
              >
                <CheckoutHeaderIcon
                  color={page.pages.includes(item) ? "#e33036" : "black"}
                  icon={
                    item === "cos" && !page.pages.includes("date contact")
                      ? faCartShopping
                      : item === "date contact" && !page.pages.includes("plata")
                      ? faEnvelopeOpenText
                      : faCheck
                  }
                />
              </CheckoutHeaderItem>
              <CheckoutItemTitle
                color={page.pages.includes(item) ? "#e33036" : "black"}
              >
                {item !== "plata"
                  ? item.charAt(0).toUpperCase() + item.slice(1)
                  : ""}
              </CheckoutItemTitle>
            </CheckoutHeaderItemBox>
            {item !== "plata" ? (
              <CheckoutIcon
                color={page.pages.includes(item) ? "#e33036" : "black"}
                icon={faChevronRight}
              />
            ) : null}
          </CheckoutHeaderItemContainer>
        );
      })}
    </CheckoutHeaderContainer>
  );
}

export default CheckoutHeader;
