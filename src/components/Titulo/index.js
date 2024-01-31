import styled from "styled-components";

const TituloCont = styled.div`
    display: flex;
    font-size: 30px;
    justify-content: center;
`;


function Titulo(){
    return (
        <TituloCont>
            <p>Sistema de Gerenciamento de Clientes</p>
        </TituloCont>
    );
}

export default Titulo;