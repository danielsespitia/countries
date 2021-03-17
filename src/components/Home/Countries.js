import numberWithCommas from '../../utils/numberWithCommas';

import {
  CountryCardsContainer,
  CountryCard,
  FlagContainer,
  Flag,
  BottomCardContainer,
  InfoContainer,
  CardTitleContainer,
  CardTitle,
  LimitSpan,
  DataContainer,
  DataText,
} from '../../assets/styles/pages/HomeStyles';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  margin-top: 250px;
  width: 1760px;
  justify-content: center;
`;

const LoadingText = styled.h1`
  display: flex;
  margin: 0;
  padding: 0;
  justify-self: center;
`;

const LoadingGif = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`;

function Countries({
  countriesArray,
  searchTermFilter,
  regionFilter,
  handleClick,
  truncate,
}) {
  return (
    <CountryCardsContainer>
      {countriesArray.length < 1 && (
        <LoadingContainer>
          <LoadingGif src="https://www.bluechipexterminating.com/wp-content/uploads/2020/02/loading-gif-png-5.gif" />
          <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
      )}
      {!!countriesArray &&
        countriesArray.length > 0 &&
        countriesArray
          .filter((val) => searchTermFilter(val))
          .filter((val) => regionFilter(val))
          .map(({ alpha2Code, name, population, region, capital, flag }) => {
            return (
              <CountryCard key={alpha2Code} className="card">
                <FlagContainer>
                  <Flag
                    className="flag"
                    src={flag}
                    alt="Country Flag"
                    onClick={() => handleClick(name)}
                  />
                </FlagContainer>
                <BottomCardContainer>
                  <InfoContainer>
                    <CardTitleContainer>
                      <LimitSpan>
                        <CardTitle>{truncate(name)}</CardTitle>
                      </LimitSpan>
                    </CardTitleContainer>
                    <DataContainer>
                      <DataText>
                        <strong>Population:</strong>{' '}
                        {numberWithCommas(population)}
                      </DataText>
                      <DataText>
                        <strong>Region:</strong> {region}
                      </DataText>
                      <DataText>
                        <strong>Capital:</strong> {capital}
                      </DataText>
                    </DataContainer>
                  </InfoContainer>
                </BottomCardContainer>
              </CountryCard>
            );
          })}
    </CountryCardsContainer>
  );
}

export default Countries;
