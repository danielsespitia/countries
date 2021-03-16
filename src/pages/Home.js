import Header from '../parts/Header';
import SearchBar from '../components/Home/SearchBar';
import DropdownFilter from '../components/Home/DropdownFilter';
import Countries from '../components/Home/Countries';

import { singleCountry } from '../dataShape';

import { H2, P } from '../assets/styles/GlobalStyles';

import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1440px;
  min-height: 100vh;
  width: 100vw;
  background-color: #212e37;
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

export const CountryCardsContainer = styled.div`
  display: inherit;
  flex-flow: row wrap;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 49px;
  margin-left: 80px;
  margin-right: 81px;
`;

export const CountryCard = styled.div`
  display: inherit;
  flex-direction: column;
  height: 336px;
  width: 263px;
  margin-bottom: 72px;
  background-color: #2b3743;
  border-radius: 8px;
`;

export const FlagContainer = styled.div`
  display: inherit;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 50%;
  width: 100%;
`;

export const Flag = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  height: 50%;
  width: 100%;
  margin-top: 27px;
  margin-left: 24px;
`;

export const CardTitleContainer = styled.div`
  display: inherit;
`;

export const CardTitle = styled(H2)`
  font-size: 1.09em;
  font-weight: 800;
`;

export const DataContainer = styled.div`
  display: inherit;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
`;

export const DataText = styled(P)`
  font-size: 0.89em;
  font-weight: 300;
  margin-bottom: 5px;
`;

function Home() {
  const currentCountry = singleCountry[0];
  const { name, population, region, capital, flag } = currentCountry;

  return (
    <PageContainer>
      <Header />
      <Main>
        <SearchFilterContainer>
          <SearchBar />
          <DropdownFilter />
        </SearchFilterContainer>
        <CountryCardsContainer>
          <CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard>
          <CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard><CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard><CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard><CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard><CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard><CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard><CountryCard>
            <FlagContainer>
              <Flag src={flag} alt="flag" />
            </FlagContainer>
            <InfoContainer>
              <CardTitleContainer>
                <CardTitle>{name}</CardTitle>
              </CardTitleContainer>
              <DataContainer>
                <DataText>
                  <strong>Population:</strong> {population}
                </DataText>
                <DataText>
                  <strong>Region:</strong> {region}
                </DataText>
                <DataText>
                  <strong>Capital:</strong> {capital}
                </DataText>
              </DataContainer>
            </InfoContainer>
          </CountryCard>
        </CountryCardsContainer>
      </Main>
    </PageContainer>
  );
}

export default Home;
