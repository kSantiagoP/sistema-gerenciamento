import styled from 'styled-components';
import BuscaUser from '../components/BuscaUser';

const BuscaCont = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #0fbf56 45%, #5ac485 );

`;

function Busca() {
  return (
    <BuscaCont>
        <BuscaUser></BuscaUser>
    </BuscaCont>
  );
}

export default Busca;
