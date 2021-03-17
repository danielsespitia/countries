import styled from 'styled-components';
import { H2, P } from '../GlobalStyles';

export const SearchFilterContainer = styled.div`
  display: inherit;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: 80px;
  margin-right: 81px;
`;

export const SearchContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  height: 53px;
  width: 25vw;
  border-radius: 8px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.08);
`;

export const SearchBarInput = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 74px;
  font-size: 0.89em;
  border: none;
  outline: none;
  &::placeholder {
    opacity: 0.9;
  }
`;

export const SelectContainer = styled.div`
  display: inherit;
  flex-direction: row-reverse;
  align-items: center;
  width: 10.4vw;
  height: 53px;
`;

export const SelectRegion = styled.select`
  height: 100%;
  width: 100%;
  padding-left: 10%;
  background-repeat: no-repeat;
  background-size: 23px 23px;
  background-position: 28px 16px;
  font-size: 0.84em;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.08);
  outline: none;
  & > select {
  }
`;

export const CountryCardsContainer = styled.div`
  display: grid;
  grid-template-columns: 27.1% 27.1% 27.1% 27.1%;
  margin-top: 49px;
  margin-left: 80px;
`;

export const CountryCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 336px;
  width: 263px;
  margin-bottom: 72px;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.08);
`;

export const FlagContainer = styled.div`
  display: inherit;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 220px;
  height: 50%;
  width: 100%;
  cursor: pointer;
`;

export const Flag = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const BottomCardContainer = styled.div`
  display: inherit;
  height: 50%;
  width: 100%;
`;

export const InfoContainer = styled.div`
  display: inherit;
  flex-direction: column;
  width: 80%;
  margin-top: 27px;
  margin-left: 24px;
`;

export const CardTitleContainer = styled.div`
  display: inherit;
  align-items: flex-start;
  width: 100%;
  text-align: left;
`;

export const LimitSpan = styled.span`
  display: inherit;
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
