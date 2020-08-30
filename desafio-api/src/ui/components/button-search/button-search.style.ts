import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    min-width: 1370px;
    margin-left: 60px;
    border-right:1px solid #FFFFFF;
`;

const Input = styled.input`
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: #FFFFFF;
    font-size: 12.1964px;
    
    &::placeholder{
        font-family: Ubuntu;
        font-style: normal;
        font-weight: normal;
        font-size: 12.1964px;
        line-height: 14px;
        letter-spacing: 0.01em;
        color: #FFFFFF;
        opacity: 0.7;
    }
`;

export { Container, Input }