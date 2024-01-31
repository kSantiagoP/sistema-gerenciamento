import Titulo from '../Titulo';
import LinksHeader from '../LinksHeader';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderCont = styled.div`
    background-color: #fff;
    justify-content: center;
`;

function Header(){
    return(
    <HeaderCont>
        <Link to="/" style={{textDecoration: 'none'}}>
            <Titulo></Titulo>
        </Link>

        <LinksHeader></LinksHeader>
    </HeaderCont>
    );
}

export default Header;