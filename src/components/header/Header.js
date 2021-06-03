import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  text-align: center;
  margin: 7px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <h1>PicTweak</h1>
    </HeaderWrapper>
  );
}

export default Header;
