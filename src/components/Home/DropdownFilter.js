import styled from 'styled-components';

export const SelectContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  margin-right: 81px;
  width: 10.4vw;
  height: 53px;
`;

export const SelectRegion = styled.select`
  height: 100%;
  width: 100%;
  padding-left: 10%;
  background-color: #2b3743;
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 28px 16px;
  font-size: 0.84em;
  color: white;
  border: none;
  border-radius: 6px;
  /* box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.02); */
  outline: none;
  & > select {
  }
`;

function DropdownFilter() {
  return (
    <SelectContainer>
      <SelectRegion name="region-filter">
        <option value="" disabled selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Europe">Oceania</option>
      </SelectRegion>
    </SelectContainer>
  );
}

export default DropdownFilter;
