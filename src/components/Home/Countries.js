import numberWithCommas from '../../utils/numberWithCommas';

import loading from '../../assets/images/loading.gif';

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

import {
  LoadingContainer,
  LoadingText,
  LoadingGif,
} from '../../assets/styles/GlobalStyles';

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
          <LoadingGif src={loading} />
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
