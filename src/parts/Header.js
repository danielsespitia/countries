import styled from 'styled-components';
import { H1, P } from '../assets/styles/GlobalStyles';

import { IoMoonSharp } from 'react-icons/io5';

export const HeaderContainer = styled.header`
  display: inherit;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  background-color: #2b3743;
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

export const DarkModeContainer = styled.div`
  display: inherit;
  align-items: center;
  margin-top: -3px;
  margin-right: 81px;
`;

export const DarkModeText = styled(P)`
  margin-left: 9px;
  font-weight: 500;
`;

function Header() {
  return (
    <HeaderContainer className="header">
      <HeaderTitleContainer>
        <HeaderTitle>Where in the world?</HeaderTitle>
      </HeaderTitleContainer>
      <DarkModeContainer>
        <IoMoonSharp color={'white'} />
        <DarkModeText>Dark Mode</DarkModeText>
      </DarkModeContainer>
    </HeaderContainer>
  );
}

export default Header;
