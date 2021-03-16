import styled from 'styled-components';
import { H1, P } from '../assets/styles/GlobalStyles';

import { IoMoonSharp } from 'react-icons/io5';

export const HeaderContainer = styled.header`
  display: inherit;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
`;

export const HeaderTitleContainer = styled.div`
  display: inherit;
  margin-top: -5px;
  margin-left: 85px;
  transform: scaleX(1.04);
`;

export const HeaderTitle = styled(H1)`
  font-size: 1.5em;
  font-weight: 700;
  transform: scaleY(0.95);
`;

export const DarkModeButton = styled.button`
  display: inherit;
  align-items: center;
  background: none;
  border: none;
  margin-top: -3px;
  margin-right: 81px;
`;

export const DarkModeText = styled(P)`
  margin-left: 9px;
  font-weight: 500;
`;

function Header({ themeToggler }) {
  return (
    <HeaderContainer className="header">
      <HeaderTitleContainer>
        <HeaderTitle>Where in the world?</HeaderTitle>
      </HeaderTitleContainer>
      <DarkModeButton onClick={themeToggler}>
        <IoMoonSharp className="icon" />
        <DarkModeText>Dark Mode</DarkModeText>
      </DarkModeButton>
    </HeaderContainer>
  );
}

export default Header;
