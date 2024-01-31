import styled from "styled-components";


const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 10px 40px;
    border-radius: 10px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;

    &::placeholder {
            color: #FFF;
            font-size: 16px;
    }

`;


export default Input;