import { faCheck, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { InputContainer, Checkbox, CheckBoxContainer, FilterArrow, FilterContainer, FilterItem, FilterItems, FilterProductsContainer, FilterTitle, FilterTitleContainer, Input, InputLine, ProducerItem, ProducerItemContainer, RangeSliderContainer, HandleContainer, Handle, Tooltip, TooltipContainer } from "../styles/FilterProductsStyles";


function FilterProducts() {
  const [dropdown, setDropdown] = useState({ dimensiune: false, producator: false, pret: false, culoare: false });
  const [filters, setFilters] = useState<any>({ min: 20, max: 40 });
  const [slider, setSlider] = useState<any>({ left: 0, right: 100 })
  const [inputs, setInputs] = useState({ min: 0, max: 100 })
  console.log(inputs)
  function handleSlider(e: any, handle: string) {
    setSlider({ ...slider, [handle]: +e.target.value })
  }

  function handleOnBlur(e: any) {
    if (e.target.name === 'leftInput' && e.target.value > inputs.max) {
      setInputs({ min: inputs.max, max: e.target.value })
    }
    if (e.target.name === 'rightInput' && e.target.value < inputs.min) {
      setInputs({ min: e.target.value, max: inputs.min })
    }
    setSlider({ ...slider, [e.target.name === 'leftInput' ? 'left' : 'right']: e.target.value })
  }

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
          <Input type='text' name='leftInput' onBlur={handleOnBlur} value={inputs.min} onChange={(e: any) => {
            setInputs({ ...inputs, min: e.target.value })
          }} />
          <InputLine>-</InputLine>
          <Input type='text' name='rightInput' onBlur={handleOnBlur} value={inputs.max} onChange={(e: any) => {
            setInputs({ ...inputs, max: e.target.value })
          }} />
        </InputContainer>
        <RangeSliderContainer>
          <HandleContainer width={slider.left < slider.right ? Math.abs(slider.left - slider.right) + '%' : (slider.left - slider.right) + '%'} left={slider.left < slider.right ? slider.left + '%' : slider.right + '%'} />
          {['left', 'right'].map(item => {
            return <TooltipContainer key={item}><Handle key={item} value={slider[item]} type='range' onMouseUp={(e: any) => {
              let max = 0;
              if (item === 'left' && e.target.value > inputs.max) {
                max = inputs.max;
                setInputs({ min: inputs.max, max: e.target.value })
                return;
              }
              if (item === 'right' && e.target.value < inputs.min) {
                setInputs({ min: e.target.value, max: inputs.min })
                return;
              }
              setInputs({ ...inputs, [item === 'left' ? 'min' : 'max']: e.target.value })
            }} onChange={(e) => handleSlider(e, item)} min='0' max='100' />
              <Tooltip style={{ background: item === 'left' ? 'blue' : '' }} left={Math.abs(slider[item]) + '%'}>{slider[item]}</Tooltip>
            </TooltipContainer>
          })}

        </RangeSliderContainer>
      </FilterItems>
    </FilterContainer>
  </FilterProductsContainer>;
}
export default FilterProducts;
