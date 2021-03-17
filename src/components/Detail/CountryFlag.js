import {
  BigFlagContainer,
  BigFlag,
} from '../../assets/styles/pages/DetailStyles';

function CountryFlag({ flag }) {
  return (
    <BigFlagContainer>
      <BigFlag src={flag} alt="Country Flag" />
    </BigFlagContainer>
  );
}

export default CountryFlag;
