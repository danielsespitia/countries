import { useState, useEffect } from 'react';
import axios from 'axios';

import CountryFlag from '../components/Detail/CountryFlag';
import CountryData from '../components/Detail/CountryData';

import { PageContainer, Main } from '../assets/styles/GlobalStyles';
import {
  BackButton,
  BackButtonContainer,
  backButtonIconStyle,
  CountryDetailContainer,
} from '../assets/styles/pages/DetailStyles';

import { IoIosArrowRoundBack } from 'react-icons/io';

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

  const {
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    flag,
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
          <CountryFlag flag={flag} />
          <CountryData
            name={name}
            nativeName={nativeName}
            population={population}
            region={region}
            subregion={subregion}
            capital={capital}
            topLevelDomain={topLevelDomain}
          />
        </CountryDetailContainer>
      </Main>
    </PageContainer>
  );
}

export default Detail;