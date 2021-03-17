import { IoMoonSharp } from 'react-icons/io5';

import {
  HeaderContainer,
  HeaderTitleContainer,
  HeaderAnchor,
  DarkModeButton,
  DarkModeText,
} from '../assets/styles/parts/HeaderStyles';

function Header({ themeToggler }) {
  return (
    <HeaderContainer className="header">
      <HeaderTitleContainer>
        <HeaderAnchor className="anchor" to="/">
          Where in the world?
        </HeaderAnchor>
      </HeaderTitleContainer>
      <DarkModeButton onClick={themeToggler}>
        <IoMoonSharp className="icon" />
        <DarkModeText>Dark Mode</DarkModeText>
      </DarkModeButton>
    </HeaderContainer>
  );
}

export default Header;
