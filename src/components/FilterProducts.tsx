import {
  faCheck,
  faChevronUp,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { initialStateType } from "../app/reducer/loginSlice";
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
  const [filters, setFilters] = useState<any>({ min: 0, max: 0 });
  const [slider, setSlider] = useState<any>({ left: 0, right: 100 });
  const [inputs, setInputs] = useState({ min: 0, max: 100 });
  const categories = useSelector(
    (state: initialStateType) => state.products.list
  );
  const sizes: any = new Set(
    categories
      .map((item: any) => {
        let arr = item.marimi.map((size: any) => size.marime);
        return arr;
      })
      .flat()
  );

  const producer: any = new Set(
    categories.map((item: any) => item.producator).filter((i: string) => i)
  );
  const colors: any = new Set(
    categories.map((item: any) => item.culoare).filter((i: string) => i)
  );
  const minPrice = Math.min(
    ...categories.map((item: any) => +item.pret).filter((i: any) => i)
  );
  const maxPrice = Math.max(
    ...categories.map((item: any) => +item.pret).filter((i: any) => i)
  );

  useEffect(() => {
    setFilters({ ...filters, min: minPrice, max: maxPrice });
    setInputs({ ...inputs, min: minPrice, max: maxPrice });
    setSlider({ ...slider, left: minPrice, right: maxPrice });
  }, [minPrice, maxPrice]);

  function handleSlider(e: any, handle: string) {
    if (
      handle === "left" &&
      Math.floor(((e.target.value - minPrice) / (maxPrice - minPrice)) * 100) >=
        50
    ) {
      return;
    }
    if (
      handle === "right" &&
      Math.floor(((e.target.value - minPrice) / (maxPrice - minPrice)) * 100) <=
        50
    ) {
      return;
    }
    setSlider({ ...slider, [handle]: +e.target.value });
  }

  function handleOnBlur(e: any) {
    if (e.target.name === "leftInput" && e.target.value >= maxPrice / 2) {
      setInputs({ ...inputs, min: maxPrice / 2 });
      setSlider({
        ...slider,
        [e.target.name === "leftInput" ? "left" : "right"]: maxPrice / 2,
      });
      return;
    }
    if (e.target.name === "rightInput" && e.target.value <= maxPrice / 2) {
      setInputs({ ...inputs, max: maxPrice / 2 });
      setSlider({
        ...slider,
        [e.target.name === "leftInput" ? "left" : "right"]: maxPrice / 2,
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
          {[...sizes]
            .filter((i) => i)
            .map((item) => (
              <FilterItem
                key={item}
                active={filters["22"]}
                onClick={() => setFilters({ ...filters, ["22"]: "22" })}
              >
                {item}
              </FilterItem>
            ))}
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
          {[...producer].map((item: any) => {
            return (
              <ProducerItemContainer key={item}>
                <CheckBoxContainer
                  onClick={() =>
                    setFilters({ ...filters, ["under armour"]: "under armour" })
                  }
                >
                  <Checkbox
                    style={{
                      display: filters["under armour"] ? "flex" : "none",
                    }}
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
                    setFilters({
                      ...filters,
                      ["under armour"]: "under armour",
                    });
                  }}
                >
                  {item}
                </ProducerItem>
              </ProducerItemContainer>
            );
          })}
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
          {[...colors].map((item: any) => {
            return (
              <ProducerItemContainer key={item}>
                <CheckBoxContainer>
                  <Checkbox icon={faCheck} />
                </CheckBoxContainer>
                <ProducerItem>{item}</ProducerItem>
              </ProducerItemContainer>
            );
          })}
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
                Math.abs(
                  ((slider.left - slider.right) / (maxPrice - minPrice)) * 100
                ) + "%"
              }
              left={
                ((slider.left - minPrice) / (maxPrice - minPrice)) * 100 + "%"
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
                    min={minPrice}
                    max={maxPrice}
                  />
                  <Tooltip
                    left={
                      Math.abs(
                        ((slider[item] - minPrice) / (maxPrice - minPrice)) *
                          100
                      ) + "%"
                    }
                  >
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
