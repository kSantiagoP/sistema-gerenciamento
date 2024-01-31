import styled from 'styled-components';
import BasicModal from '../components/ModalRota';

const RotaCont = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #0fbf56 45%, #5ac485 );

`;

const RotaText = styled.h2`
  color: #fff;
  text-align: center;

`; 



/*
const handlerClick = (event) => {
  fetchClientes();

  console.log(marcos);
  async function fetchClientes(){
      const clientesAPI = await getClientes();
      marcos = calculaRota(clientesAPI);
  }
}
*/

function Rota() {

  return (
    <RotaCont>
      <RotaText>
        Calcular rota:
      </RotaText>
      <BasicModal></BasicModal>
    </RotaCont>
  );
}

export default Rota;
