import Header from './../header/Header';
import Main from './../main/Main';
import Footer from '../footer/Footer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Main />
      <Footer />
    </AppWrapper>
  );
}

export default App;
