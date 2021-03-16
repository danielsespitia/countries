import { singleCountry } from '../../dataShape';
import { H2, P } from '../../assets/styles/GlobalStyles';

import styled from 'styled-components';

export const CountryCardsContainer = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr 1fr 1fr;
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
  background-color: lightblue;
  height: 220px;
  width: 100%;
`;

export const Flag = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  width: 100%;
  object-fit: none;
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
  align-items: flex-start;
  width: 80%;
  text-align: left;
  background-color: pink;
`;

export const LimitSpan = styled.span`
  display: inherit;
  background-color: lightgreen;
  max-width: 23ch;
  width: 100%;
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

function Countries({ countriesArray }) {
  return (
    <CountryCardsContainer>
      {countriesArray.length < 1 && <p>loading...</p>}
      {!!countriesArray &&
        countriesArray.length > 0 &&
        countriesArray.map(({ name, population, region, capital, flag }) => {
          return (
            <CountryCard>
              <FlagContainer>
                <Flag src={flag} alt="flag" />
              </FlagContainer>
              <InfoContainer>
                <CardTitleContainer>
                  <LimitSpan>
                    <CardTitle>{name}</CardTitle>
                  </LimitSpan>
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
          );
        })}
    </CountryCardsContainer>
  );
}

export default Countries;
