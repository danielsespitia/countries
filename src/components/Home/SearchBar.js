import styled from 'styled-components';

import searchIcon from '../../assets/images/search-icon.webp';

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
  background: url(${searchIcon});
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

function SearchBar() {
  return (
    <SearchContainer>
      <SearchBarInput type="input" placeholder="Search for a country..." />
    </SearchContainer>
  );
}

export default SearchBar;
