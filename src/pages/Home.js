import Header from '../parts/Header';
import SearchBar from '../components/Home/SearchBar';
import DropdownFilter from '../components/Home/DropdownFilter';
import Countries from '../components/Home/Countries';

import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 1024px;
  width: 1440px;
  /* height: 100vh;
  width: 100vw; */
  background-color: #212e37;
`;

export const Main = styled.main`
  display: inherit;
`;

export const SearchFilterContainer = styled.div`
  display: inherit;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 80px;
  width: 100%;
`;

function Home() {
  return (
    <PageContainer>
      <Header />
      <Main>
        <SearchFilterContainer>
          <SearchBar />
          <DropdownFilter />
        </SearchFilterContainer>
      </Main>
    </PageContainer>
  );
}

export default Home;
