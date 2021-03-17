import { useState, useEffect } from 'react';
import axios from 'axios';

import CountryFlag from '../components/Detail/CountryFlag';
import CountryData from '../components/Detail/CountryData';

import numberWithCommas from '../utils/numberWithCommas';

import { PageContainer, Main, H1, P } from '../assets/styles/GlobalStyles';

import { IoIosArrowRoundBack } from 'react-icons/io';

import styled from 'styled-components';

export const BackButtonContainer = styled.div`
  display: inherit;
  align-items: center;
  height: 39px;
  width: 100%;
  margin-top: 80px;
  margin-left: 80px;
  margin-right: 81px;
`;

export const BackButton = styled.button`
  display: inherit;
  align-items: center;
  border: none;
  height: 100%;
  width: 138px;
  padding-bottom: 2px;
  font-size: 1.05em;
  font-weight: 300;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const CountryDetailContainer = styled.div`
  display: inherit;
  width: 100%;
  height: 401px;
  margin-top: 80px;
`;

export const BigFlagContainer = styled.div`
  display: inherit;
  width: 560px;
  height: 401px;
  margin-left: 80px;
  box-shadow: 0px 0px 8px 10px rgba(0, 0, 0, 0.2);
`;

export const BigFlag = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const DetailsContainer = styled.div`
  display: inherit;
  flex-direction: column;
  height: 100%;
  width: 40%;
  margin-left: 144px;
  text-align: center;
`;

export const TitleContainer = styled.div`
  display: inherit;
  margin-top: 39px;
`;

export const CountryName = styled(H1)``;

export const DetailInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 223px;
  margin-top: 33px;
  text-align: left;
`;

export const LeftInfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
`;
export const RightInfoContainer = styled.div`
  display: inherit;
  margin-right: 104px;
  flex-direction: column;
`;

export const InfoText = styled(P)`
  font-size: 0.97em;
  margin-bottom: 12px;
  font-weight: 300;
`;

export const BordersContainer = styled.div`
  display: inherit;
  align-items: center;
  justify-content: flex-start;
`;

export const BorderText = styled(P)`
  font-weight: 500;
`;

export const BorderButtonContainer = styled.div`
  display: inherit;
  height: 27px;
  margin-left: 15px;
`;

export const BorderButton = styled.button`
  border: none;
  height: 100%;
  margin-right: 10px;
  width: 97px;
  border-radius: 3px;
  font-size: 0.87em;
  font-weight: 400;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.15);
  &:hover {
    opacity: 0.8;
  }
`;

export const BackButtonIconStyle = {
  marginLeft: '20px',
  marginRight: '5px',
  marginTop: '2px',
};

function Detail() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: 'https://restcountries.eu/rest/v2/name/belgium?fullText=true',
        });
        setState(data[0]);
      } catch (error) {}
    }
    load();
  }, []);

  // for (let i = 0; i < state.languages.length; i++) {

  // }

  return (
    <PageContainer>
      <Main>
        <BackButtonContainer>
          <BackButton>
            <IoIosArrowRoundBack size={31} style={BackButtonIconStyle} />
            Back
          </BackButton>
        </BackButtonContainer>
        <CountryDetailContainer>
          <BigFlagContainer>
            <BigFlag src={state.flag} alt="Country Flag" />
          </BigFlagContainer>
          <DetailsContainer>
            <TitleContainer>
              <CountryName>{state.name}</CountryName>
            </TitleContainer>
            <DetailInfoContainer>
              <LeftInfoContainer>
                <InfoText>
                  <strong>Native Name:</strong> {state.nativeName}
                </InfoText>
                <InfoText>
                  <strong>Population:</strong> {state.population}
                </InfoText>
                <InfoText>
                  <strong>Region:</strong> {state.region}
                </InfoText>
                <InfoText>
                  <strong>Sub Region:</strong> {state.subregion}
                </InfoText>
                <InfoText>
                  <strong>Capital:</strong> {state.capital}
                </InfoText>
              </LeftInfoContainer>
              <RightInfoContainer>
                <InfoText>
                  <strong>Top Level Domain:</strong> {state.topLevelDomain}
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
                <BorderButton>France</BorderButton>
                <BorderButton>Germany</BorderButton>
                <BorderButton>Netherlands</BorderButton>
              </BorderButtonContainer>
            </BordersContainer>
          </DetailsContainer>
        </CountryDetailContainer>
      </Main>
    </PageContainer>
  );
}

export default Detail;
