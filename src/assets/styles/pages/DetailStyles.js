import { Link } from 'react-router-dom';

import { H1, P } from '../GlobalStyles';
import styled from 'styled-components';

export const BackButtonContainer = styled.div`
  display: inherit;
  align-items: center;
  height: 39px;
  margin-top: 80px;
  margin-left: 80px;
  margin-right: 81px;
`;

export const BackButton = styled(Link)`
  text-decoration: none;
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
  margin-left: 14%;
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
  width: 50%;
  flex-direction: column;
`;
export const RightInfoContainer = styled.div`
  display: inherit;
  width: 50%;
  flex-direction: column;
`;

export const InfoText = styled(P)`
  font-size: 0.97em;
  margin-bottom: 12px;
  font-weight: 300;
`;

export const ArrayRenderContainer = styled.div`
  display: inline-block;
  flex-direction: row;
`;

export const ArrayRenderText = styled(P)`
  width: 100%;
  font-size: 0.97em;
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
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const backButtonIconStyle = {
  marginLeft: '20px',
  marginRight: '5px',
  marginTop: '2px',
};
