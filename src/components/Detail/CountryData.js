import numberWithCommas from '../../utils/numberWithCommas';

import {
  CountryName,
  DetailInfoContainer,
  DetailsContainer,
  InfoText,
  LeftInfoContainer,
  RightInfoContainer,
  TitleContainer,
  BordersContainer,
  BorderText,
  BorderButtonContainer,
  BorderButton,
} from '../../assets/styles/pages/DetailStyles';

function CountryData({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
}) {
  return (
    <DetailsContainer>
      <TitleContainer>
        <CountryName>{name}</CountryName>
      </TitleContainer>
      <DetailInfoContainer>
        <LeftInfoContainer>
          <InfoText>
            <strong>Native Name:</strong> {nativeName}
          </InfoText>
          <InfoText>
            <strong>Population:</strong> {population}
          </InfoText>
          <InfoText>
            <strong>Region:</strong> {region}
          </InfoText>
          <InfoText>
            <strong>Sub Region:</strong> {subregion}
          </InfoText>
          <InfoText>
            <strong>Capital:</strong> {capital}
          </InfoText>
        </LeftInfoContainer>
        <RightInfoContainer>
          <InfoText>
            <strong>Top Level Domain:</strong> {topLevelDomain}
          </InfoText>
          <InfoText>
            <strong>Currencies:</strong>
          </InfoText>
          <InfoText>
            <strong>Languages: </strong>
          </InfoText>
        </RightInfoContainer>
      </DetailInfoContainer>
      <BordersContainer>
        <BorderText>Border Countries: </BorderText>
        <BorderButtonContainer>
          <BorderButton></BorderButton>
        </BorderButtonContainer>
      </BordersContainer>
    </DetailsContainer>
  );
}

export default CountryData;
