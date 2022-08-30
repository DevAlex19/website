import { faCheck, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { InputContainer, Checkbox, CheckBoxContainer, FilterArrow, FilterContainer, FilterItem, FilterItems, FilterProductsContainer, FilterTitle, FilterTitleContainer, Input, InputLine, ProducerItem, ProducerItemContainer } from "../styles/FilterProductsStyles";


function FilterProducts() {
  const [dropdown, setDropdown] = useState({ dimensiune: false, producator: false, pret: false, culoare: false });
  const [filters, setFilters] = useState<any>({ min: 20, max: 40 });

  console.log(filters)
  return <FilterProductsContainer>
    <FilterContainer>
      <FilterTitleContainer onClick={() => setDropdown({ ...dropdown, dimensiune: !dropdown.dimensiune })}>
        <FilterTitle>Dimensiune</FilterTitle>
        <FilterArrow className={dropdown.dimensiune ? 'expand' : ''} icon={faChevronUp} />
      </FilterTitleContainer>
      <FilterItems className={dropdown.dimensiune ? 'expand' : ''}>
        <FilterItem active={filters['22']} onClick={() => setFilters({ ...filters, ['22']: "22" })}>22</FilterItem>
        <FilterItem>22</FilterItem>
        <FilterItem>22</FilterItem>
        <FilterItem>22</FilterItem>
        <FilterItem>22</FilterItem>
        <FilterItem>22</FilterItem>
      </FilterItems>
    </FilterContainer>
    <FilterContainer>
      <FilterTitleContainer onClick={() => setDropdown({ ...dropdown, producator: !dropdown.producator })}>
        <FilterTitle>Producator</FilterTitle>
        <FilterArrow className={dropdown.producator ? 'expand' : ''} icon={faChevronUp} />
      </FilterTitleContainer>
      <FilterItems type={'column'} className={dropdown.producator ? 'expand' : ''}>
        <ProducerItemContainer>
          <CheckBoxContainer onClick={() => setFilters({ ...filters, ['under armour']: "under armour" })}>
            <Checkbox style={{ display: filters['under armour'] ? 'flex' : 'none' }} icon={faCheck} />
          </CheckBoxContainer>
          <ProducerItem onClick={() => {
            if (filters['under armour']) {
              const newFilters = { ...filters };
              delete newFilters['under armour'];
              setFilters(newFilters);
              return;
            }
            setFilters({ ...filters, ['under armour']: "under armour" })
          }}>Under Armour</ProducerItem>
        </ProducerItemContainer>

      </FilterItems>
    </FilterContainer>
    <FilterContainer>
      <FilterTitleContainer onClick={() => setDropdown({ ...dropdown, culoare: !dropdown.culoare })}>
        <FilterTitle>Culoare</FilterTitle>
        <FilterArrow className={dropdown.culoare ? 'expand' : ''} icon={faChevronUp} />
      </FilterTitleContainer>
      <FilterItems type={'column'} className={dropdown.culoare ? 'expand' : ''}>
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
      <FilterTitleContainer onClick={() => setDropdown({ ...dropdown, pret: !dropdown.pret })}>
        <FilterTitle>Pret (lei)</FilterTitle>
        <FilterArrow className={dropdown.pret ? 'expand' : ''} icon={faChevronUp} />
      </FilterTitleContainer>
      <FilterItems type={'column'} className={dropdown.pret ? 'expand' : ''}>
        <InputContainer>
          <Input />
          <InputLine>-</InputLine>
          <Input />
        </InputContainer>
      </FilterItems>
    </FilterContainer>
  </FilterProductsContainer>;
}
export default FilterProducts;
