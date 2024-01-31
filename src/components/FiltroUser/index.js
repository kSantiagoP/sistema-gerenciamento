import Input from "../Input";
import styled from "styled-components";
import { useRef} from "react";

function FiltroUser(props){
    const dadosGrid = props.dadosGrid;

    const nomeCliente = useRef(null);
    const emailCliente = useRef(null);
    const telefoneCliente = useRef(null);
        
    const FiltroStyle = styled.div`
        border: 1px solid white;
        border-radius: 4px;
        padding: 6px 6px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;    
    `;

    const FiltroTitulo = styled.h3`
        color: #FFF;
        font-size: 20px;
        text-align: center;
    
    `;

    const OpcoesContainer = styled.div`
        display: flex;
        justify-content: center;
    
    `;

    const ButtonDiv = styled.div`
        display: flex;
        justify-content: center;
    
    `;

    const Button = styled.button`
        color: #0a632e;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #0a632e;
        border-radius: 3px;
    `;

    const handlerSubmit = event => {
        event.preventDefault();

        const NomeBusca = nomeCliente.current.value;
        const EmailBusca = emailCliente.current.value;
        const TelefoneBusca = telefoneCliente.current.value;

        let Resultado = dadosGrid;
        
        Resultado = NomeBusca ? Resultado.filter(dado => dado.nome.includes(NomeBusca)) : Resultado;
        Resultado = EmailBusca ? Resultado.filter(dado => dado.email.includes(EmailBusca)) : Resultado;
        Resultado = TelefoneBusca ? Resultado.filter(dado => dado.telefone.includes(TelefoneBusca)) : Resultado;

        props.filtroCallback(Resultado);
    }


    return(
        <FiltroStyle>
            <FiltroTitulo>Filtro</FiltroTitulo>
            <form onSubmit={handlerSubmit}>
                <OpcoesContainer> 
                    <Input ref={nomeCliente} placeholder={`Nome do Cliente`}></Input>
                </OpcoesContainer>
                <OpcoesContainer> 
                    <Input  ref={emailCliente} placeholder={`Email do Cliente`}></Input>
                </OpcoesContainer>
                <OpcoesContainer> 
                    <Input ref={telefoneCliente} placeholder={`Telefone do Cliente`}></Input>
                </OpcoesContainer>
                <ButtonDiv>
                    <Button type='submit'>Pesquisar</Button> 
                </ButtonDiv> 
            </form>

        </FiltroStyle>
    );

}

export default FiltroUser;
