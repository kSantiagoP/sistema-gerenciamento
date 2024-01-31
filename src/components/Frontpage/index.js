import styled from "styled-components";

const FpCont = styled.section`
    color: #FFF;
    text-align: center;
    width: 100%;
    height: 270px;
    padding: 85px 0;
    background-image: linear-gradient(90deg, #0fbf56 45%, #5ac485 105%);
`;
const TextoCont = styled.h3`
    color: #FFF;
    font-size: 27px;
    text-align: center;
    width: 100%;
`;

function Frontpage(){
    return(
        <FpCont>
            <TextoCont>Página demonstrativa para CRUD de Usuários</TextoCont>
        </FpCont>
    );
}

export default Frontpage;