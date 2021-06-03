import styled from 'styled-components';
import './Footer.css';

const FooterWrapper = styled.footer`
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: black;
  }
`;

// Add link para meu LinkedIn
function Footer() {
  return (
    <FooterWrapper>
      <a href="https://www.linkedin.com/in/odntht/?locale=en_US">
        By Fernando Cavalcante
      </a>
    </FooterWrapper>
  );
}

export default Footer;
