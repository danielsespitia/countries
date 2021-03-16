import styled from 'styled-components';

import searchIcon from '../../assets/images/search-icon.webp';

export const SearchContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  height: 53px;
  width: 25vw;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.08)
`;

export const SearchBarInput = styled.input`
  height: 100%;
  width: 100%;
  background: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 28px 16px;
  padding-left: 74px;
  font-size: 0.89em;
  border: none;
  outline: none;
  &::placeholder {
    opacity: 0.9;
  }
`;

function SearchBar({ handleChange }) {
  return (
    <SearchContainer className="search-bar">
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
