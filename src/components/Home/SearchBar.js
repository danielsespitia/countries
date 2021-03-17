import {
  SearchContainer,
  SearchBarInput,
} from '../../assets/styles/pages/HomeStyles';

function SearchBar({ handleChange }) {
  return (
    <SearchContainer className="search-bar">
      <SearchBarInput className="search-input"
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
