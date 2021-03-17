import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { P } from '../GlobalStyles';

export const HeaderContainer = styled.header`
  display: inherit;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.08);
`;

export const HeaderTitleContainer = styled.div`
  display: inherit;
  margin-top: -5px;
  margin-left: 85px;
  transform: scaleX(1.04);
`;

export const HeaderAnchor = styled(Link)`
  font-size: 1.5em;
  font-weight: 700;
  transform: scaleY(0.95);
  text-decoration: none;
`;

export const DarkModeButton = styled.button`
  display: inherit;
  font-size: 1em;
  align-items: center;
  background: none;
  border: none;
  margin-top: -3px;
  margin-right: 73px;
  font-weight: 600;
  &:hover {
    opacity: 0.8;
  }
`;

export const DarkModeText = styled(P)`
  margin-left: 9px;
  font-weight: 500;
`;
