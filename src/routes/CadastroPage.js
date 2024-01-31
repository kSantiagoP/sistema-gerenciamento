import styled from 'styled-components';
import Input from '../components/Input/index';
import { useRef } from 'react';
import { postClientes } from '../services/clients';

const CadastroCont = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #0fbf56 45%, #5ac485 );

`;

const FormDiv = styled.div`
  padding: 50px 45%;
  margin: 0 auto;
  display: flex-box;
  justify-content: center;

`;

const TextoCadastro = styled.h2`
  color: #FFF;
  text-align: center;


`;

const Button = styled.button`
  color: #0a632e;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #0a632e;
  border-radius: 3px;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;

`;

async function postData(data){
  const result = await postClientes(data);
  alert(result);
  return result;
}

function Cadastro() {
  const nomeCliente = useRef();
  const emailCliente = useRef();
  const telefoneCliente = useRef();
  const xCliente = useRef();
  const yCliente = useRef();

  const handlerSubmit = (event) => {
    event.preventDefault();
    const nome = nomeCliente.current.value;
    const email = emailCliente.current.value;
    const telefone = telefoneCliente.current.value;
    const x_coord = xCliente.current.value;
    const y_coord = yCliente.current.value;

    const data = {
      nome,
      email,
      telefone,
      x_coord,
      y_coord
    };

    postData(data);

  }

  return (
    <CadastroCont>
      <TextoCadastro>
        Cadastro de Usuários
      </TextoCadastro>
      <FormDiv>
        <form onSubmit={handlerSubmit}>
          <Input ref={nomeCliente} placeholder='Nome'></Input>
          <Input ref={emailCliente} placeholder='Email'></Input>
          <Input ref={telefoneCliente} placeholder='Telefone'></Input>
          <Input ref={xCliente} placeholder='Coordenadas X' type='number' inputMode='numeric'></Input>
          <Input ref={yCliente} placeholder='Coordernadas Y'  type='number' inputMode='numeric'></Input>
          <ButtonDiv>
            <Button type='submit'>Cadastrar</Button> 
          </ButtonDiv> 
        </form>
      </FormDiv>
      
        
    </CadastroCont>
  );
}

export default Cadastro;
