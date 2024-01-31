import styled from 'styled-components';
import Frontpage from '../components/Frontpage';

const HomeCont = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #0fbf56 45%, #5ac485 );

`;

function Home() {
  return (
    <HomeCont>
        <Frontpage></Frontpage>
    </HomeCont>
  );
}

export default Home;
