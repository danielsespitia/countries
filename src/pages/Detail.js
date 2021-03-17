import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import auth from '../auth';

import CountryFlag from '../components/Detail/CountryFlag';
import CountryData from '../components/Detail/CountryData';

import loading from '../assets/images/loading.gif';
import {
  PageContainer,
  Main,
  LoadingContainer,
  LoadingGif,
  LoadingText,
} from '../assets/styles/GlobalStyles';
import {
  BackButton,
  BackButtonContainer,
  backButtonIconStyle,
  CountryDetailContainer,
} from '../assets/styles/pages/DetailStyles';

import { IoIosArrowRoundBack } from 'react-icons/io';

function Detail() {
  const history = useHistory();
  const { name } = useParams();
  const [state, setState] = useState({ countryName: '' });

  useEffect(() => {
    async function load() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://restcountries.eu/rest/v2/name/${name}?fullText=true`,
        });
        setState(data[0]);
      } catch (error) {}
    }
    load();
  }, [name]);

  const handleClick = async (borders) => {
    const code = borders;
    auth.currentCountry = code;
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://restcountries.eu/rest/v2/alpha/${code}`,
      });
      setState(data);
      history.push(`/detail/${data.name}`);
    } catch (error) {}
  };

  const {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    flag,
    borders,
    currencies,
    languages,
  } = state;

  return (
    <PageContainer>
      <Main>
        <BackButtonContainer>
          <BackButton to="/" className="anchor">
            <IoIosArrowRoundBack size={31} style={backButtonIconStyle} />
            Back
          </BackButton>
        </BackButtonContainer>
        <CountryDetailContainer>
          {!name && (
            <LoadingContainer>
              <LoadingGif src={loading} />
              <LoadingText>Loading...</LoadingText>
            </LoadingContainer>
          )}
          {!!name && (
            <>
              <CountryFlag flag={flag} />
              <CountryData
                name={state.name}
                nativeName={nativeName}
                population={population}
                region={region}
                subregion={subregion}
                capital={capital}
                topLevelDomain={topLevelDomain}
                borders={borders}
                currencies={currencies}
                languages={languages}
                handleClick={handleClick}
              />
            </>
          )}
        </CountryDetailContainer>
      </Main>
    </PageContainer>
  );
}

export default Detail;
