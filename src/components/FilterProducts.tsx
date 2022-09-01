import {
  faCheck,
  faChevronUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import {
  InputContainer,
  Checkbox,
  CheckBoxContainer,
  FilterArrow,
  FilterContainer,
  FilterItem,
  FilterItems,
  FilterProductsContainer,
  FilterTitle,
  FilterTitleContainer,
  Input,
  InputLine,
  ProducerItem,
  ProducerItemContainer,
  RangeSliderContainer,
  HandleContainer,
  Handle,
  Tooltip,
  TooltipContainer,
  CloseFilter,
  FilterBtn,
} from "../styles/FilterProductsStyles";
import { FiltersMenuType } from "./DisplayProducts";

function FilterProducts({ filtersMenu, setFiltersMenu }: FiltersMenuType) {
  const [dropdown, setDropdown] = useState({
    dimensiune: false,
    producator: false,
    pret: false,
    culoare: false,
  });
  const [filters, setFilters] = useState<any>({ min: 20, max: 40 });
  const [slider, setSlider] = useState<any>({ left: 0, right: 100 });
  const [inputs, setInputs] = useState({ min: 0, max: 100 });
  const max = 100;

  //@ts-ignore
  useEffect(() => {
    if (filtersMenu) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "auto");
  }, [filtersMenu]);

  function handleSlider(e: any, handle: string) {
    if (handle === "left" && e.target.value >= max / 2) {
      return;
    }
    if (handle === "right" && e.target.value <= max / 2) {
      return;
    }
    setSlider({ ...slider, [handle]: +e.target.value });
  }

  function handleOnBlur(e: any) {
    if (e.target.name === "leftInput" && e.target.value >= max / 2) {
      setInputs({ ...inputs, min: max / 2 });
      setSlider({
        ...slider,
        [e.target.name === "leftInput" ? "left" : "right"]: max / 2,
      });
      return;
    }
    if (e.target.name === "rightInput" && e.target.value <= max / 2) {
      setInputs({ ...inputs, max: max / 2 });
      setSlider({
        ...slider,
        [e.target.name === "leftInput" ? "left" : "right"]: max / 2,
      });
      return;
    }
    setSlider({
      ...slider,
      [e.target.name === "leftInput" ? "left" : "right"]: e.target.value,
    });
  }

  return (
    <FilterProductsContainer show={filtersMenu}>
      <CloseFilter icon={faClose} onClick={() => setFiltersMenu(false)} />
      <FilterContainer>
        <FilterTitleContainer
          onClick={() =>
            setDropdown({ ...dropdown, dimensiune: !dropdown.dimensiune })
          }
        >
          <FilterTitle>Dimensiune</FilterTitle>
          <FilterArrow
            className={dropdown.dimensiune ? "expand" : ""}
            icon={faChevronUp}
          />
        </FilterTitleContainer>
        <FilterItems className={dropdown.dimensiune ? "expand" : ""}>
          <FilterItem
            active={filters["22"]}
            onClick={() => setFilters({ ...filters, ["22"]: "22" })}
          >
            22
          </FilterItem>
          <FilterItem>22</FilterItem>
          <FilterItem>22</FilterItem>
          <FilterItem>22</FilterItem>
          <FilterItem>22</FilterItem>
          <FilterItem>22</FilterItem>
        </FilterItems>
      </FilterContainer>
      <FilterContainer>
        <FilterTitleContainer
          onClick={() =>
            setDropdown({ ...dropdown, producator: !dropdown.producator })
          }
        >
          <FilterTitle>Producator</FilterTitle>
          <FilterArrow
            className={dropdown.producator ? "expand" : ""}
            icon={faChevronUp}
          />
        </FilterTitleContainer>
        <FilterItems
          type={"column"}
          className={dropdown.producator ? "expand" : ""}
        >
          <ProducerItemContainer>
            <CheckBoxContainer
              onClick={() =>
                setFilters({ ...filters, ["under armour"]: "under armour" })
              }
            >
              <Checkbox
                style={{ display: filters["under armour"] ? "flex" : "none" }}
                icon={faCheck}
              />
            </CheckBoxContainer>
            <ProducerItem
              onClick={() => {
                if (filters["under armour"]) {
                  const newFilters = { ...filters };
                  delete newFilters["under armour"];
                  setFilters(newFilters);
                  return;
                }
                setFilters({ ...filters, ["under armour"]: "under armour" });
              }}
            >
              Under Armour
            </ProducerItem>
          </ProducerItemContainer>
        </FilterItems>
      </FilterContainer>
      <FilterContainer>
        <FilterTitleContainer
          onClick={() =>
            setDropdown({ ...dropdown, culoare: !dropdown.culoare })
          }
        >
          <FilterTitle>Culoare</FilterTitle>
          <FilterArrow
            className={dropdown.culoare ? "expand" : ""}
            icon={faChevronUp}
          />
        </FilterTitleContainer>
        <FilterItems
          type={"column"}
          className={dropdown.culoare ? "expand" : ""}
        >
          <ProducerItemContainer>
            <CheckBoxContainer>
              <Checkbox icon={faCheck} />
            </CheckBoxContainer>
            <ProducerItem>Albastru</ProducerItem>
          </ProducerItemContainer>
          <ProducerItemContainer>
            <CheckBoxContainer>
              <Checkbox icon={faCheck} />
            </CheckBoxContainer>
            <ProducerItem>Albastru</ProducerItem>
          </ProducerItemContainer>
          <ProducerItemContainer>
            <CheckBoxContainer>
              <Checkbox icon={faCheck} />
            </CheckBoxContainer>
            <ProducerItem>Albastru</ProducerItem>
          </ProducerItemContainer>
        </FilterItems>
      </FilterContainer>
      <FilterContainer>
        <FilterTitleContainer
          onClick={() => setDropdown({ ...dropdown, pret: !dropdown.pret })}
        >
          <FilterTitle>Pret (lei)</FilterTitle>
          <FilterArrow
            className={dropdown.pret ? "expand" : ""}
            icon={faChevronUp}
          />
        </FilterTitleContainer>
        <FilterItems type={"column"} className={dropdown.pret ? "expand" : ""}>
          <InputContainer>
            <Input
              type="text"
              name="leftInput"
              onBlur={handleOnBlur}
              value={inputs.min}
              onChange={(e: any) => {
                setInputs({ ...inputs, min: e.target.value });
              }}
            />
            <InputLine>-</InputLine>
            <Input
              type="text"
              name="rightInput"
              onBlur={handleOnBlur}
              value={inputs.max}
              onChange={(e: any) => {
                setInputs({ ...inputs, max: e.target.value });
              }}
            />
          </InputContainer>
          <RangeSliderContainer>
            <HandleContainer
              width={
                slider.left < slider.right
                  ? Math.abs(slider.left - slider.right) + "%"
                  : slider.left - slider.right + "%"
              }
              left={
                slider.left < slider.right
                  ? slider.left + "%"
                  : slider.right + "%"
              }
            />
            {["left", "right"].map((item) => {
              return (
                <TooltipContainer key={item}>
                  <Handle
                    key={item}
                    value={slider[item]}
                    type="range"
                    onMouseUp={(e: any) => {
                      setInputs({
                        ...inputs,
                        [item === "left" ? "min" : "max"]: e.target.value,
                      });
                    }}
                    onChange={(e) => handleSlider(e, item)}
                    min="0"
                    max="100"
                  />
                  <Tooltip left={Math.abs(slider[item]) + "%"}>
                    {slider[item]}
                  </Tooltip>
                </TooltipContainer>
              );
            })}
          </RangeSliderContainer>
        </FilterItems>
      </FilterContainer>
      <FilterBtn onClick={() => setFiltersMenu(false)}>
        Aplica Filtrele
      </FilterBtn>
    </FilterProductsContainer>
  );
}
export default FilterProducts;
