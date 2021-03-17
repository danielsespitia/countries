import {
  SelectContainer,
  SelectRegion,
} from '../../assets/styles/pages/HomeStyles';

function DropdownFilter({ handleChange, regionSelect }) {
  return (
    <SelectContainer>
      <SelectRegion
        name="regionSelect"
        onChange={handleChange}
        value={regionSelect}
      >
        <option value="All">Select by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </SelectRegion>
    </SelectContainer>
  );
}

export default DropdownFilter;
