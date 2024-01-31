import styled from 'styled-components';
import { Link } from 'react-router-dom';

const linksHeader = ['Busca de Usuários','Cadastro de Usuários', 'Rota Calculada'];

const LinksHeaderCont = styled.div`
    display: flex;
    justify-content: center;
`;

const LinkHeaderCont = styled.div`
    font-size: 16px;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
`;

function LinksHeader() {
    return(
    <LinksHeaderCont>
        {
          linksHeader.map((links) => (

              <Link to={`/${links.substring(0, links.indexOf(' ')).toLocaleLowerCase()}`} style={{textDecoration: 'none'}}>
                <LinkHeaderCont> <p>{links}</p></LinkHeaderCont>
              </Link>
              
            
          ))
        }
    </LinksHeaderCont>
    );
}

export default LinksHeader;