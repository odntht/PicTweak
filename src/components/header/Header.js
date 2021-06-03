import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  text-align: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>PicTweak</h1>
    </HeaderWrapper>
  );
}

export default Header;
