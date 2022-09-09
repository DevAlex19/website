import { watch } from "fs";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartDivider } from "../styles/CartStyles";
import {
  SearchDropdownContainer,
  SearchItemBtn,
  SearchItemContainer,
  SearchItemImage,
  SearchItemName,
  SearchItemPrice,
  SearchItemSection,
} from "../styles/SearchDropdownStyles";

type SearchDropdownType = {
  modal: boolean;
  setModal: any;
  searchResult: any;
  input: string;
};

function SearchDropdown({
  modal,
  setModal,
  searchResult,
  input,
}: SearchDropdownType) {
  const ref = useRef<any>();
  const navigate = useNavigate();
  useEffect(() => {
    function closeDropdown(e: any) {
      if (modal && !ref.current.contains(e.target)) {
        setModal(false);
      }
    }
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, [modal]);

  return (
    <>
      {searchResult.length <= 0 ? (
        <SearchDropdownContainer modal={modal} ref={ref}>
          Nu s-a gasit nimic...
        </SearchDropdownContainer>
      ) : (
        <SearchDropdownContainer modal={modal} ref={ref}>
          {searchResult.slice(0, 4).map((item: any, index: number) => {
            const inputIndex = item.nume
              .toLowerCase()
              .indexOf(input.toLowerCase());
            const content = (
              <span>
                <span>{item.nume.slice(0, inputIndex)}</span>
                <span style={{ color: "red" }}>
                  {item.nume.slice(inputIndex, inputIndex + input.length)}
                </span>
                <span>
                  {item.nume.slice(inputIndex + input.length, item.nume.length)}
                </span>
              </span>
            );

            return (
              <SearchItemContainer
                key={index}
                onClick={() => navigate(`/p/${item.nume.replaceAll(" ", "-")}`)}
              >
                <SearchItemImage src={item.imagine} />
                <SearchItemSection>
                  <SearchItemName>
                    {inputIndex >= 0 ? content : item.nume}
                  </SearchItemName>
                  <SearchItemPrice>{item.pret} lei</SearchItemPrice>
                </SearchItemSection>
              </SearchItemContainer>
            );
          })}
          <CartDivider />
          <SearchItemBtn onClick={() => navigate(`/search/${input}`)}>
            Vezi toate
          </SearchItemBtn>
        </SearchDropdownContainer>
      )}
    </>
  );
}
export default SearchDropdown;
