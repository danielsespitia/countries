import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../parts/Header';
import SearchBar from '../components/Home/SearchBar';
import DropdownFilter from '../components/Home/DropdownFilter';
import Countries from '../components/Home/Countries';

import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  min-height: 100vh;
  width: 100vw;
  background-color: #202d36;
`;

export const Main = styled.main`
  display: inherit;
  width: 100%;
  flex-direction: column;
`;

export const SearchFilterContainer = styled.div`
  display: inherit;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 80px;
  margin-right: 81px;
`;

function Home() {
  const [countriesArray, setCountriesArray] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://restcountries.eu/rest/v2/all',
        });
        setCountriesArray(data);
        console.log(countriesArray);
      } catch (error) {
        console.log(error);
      }
    }
    load();
  }, []);

  return (
    <PageContainer>
      <Header />
      <Main>
        <SearchFilterContainer>
          <SearchBar />
          <DropdownFilter />
        </SearchFilterContainer>
        <Countries countriesArray={countriesArray} />
      </Main>
    </PageContainer>
  );
}

export default Home;
