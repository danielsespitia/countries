import styled from 'styled-components';

import searchIcon from '../../assets/images/search-icon.png';

export const SearchContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  height: 53px;
  width: 25vw;
`;

export const SearchBarInput = styled.input`
  height: 100%;
  width: 100%;
  background: url('https://www.pngfind.com/pngs/m/54-545056_icon-search-white-png-johns-hopkins-logo-white.png');
  background-color: #2b3743;
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 28px 16px;
  padding-left: 74px;
  font-size: 0.89em;
  color: white;
  border: none;
  border-radius: 6px;
  /* box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.02); */
  outline: none;
  &::placeholder {
    color: #ffffff;
    opacity: 0.9;
  }
`;

function SearchBar({ handleChange }) {
  return (
    <SearchContainer>
      <SearchBarInput
        id="searchTerm"
        name="searchTerm"
        type="input"
        placeholder="Search for a country..."
        onChange={handleChange}
      />
    </SearchContainer>
  );
}

export default SearchBar;
