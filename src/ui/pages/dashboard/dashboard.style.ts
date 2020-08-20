import styled from 'styled-components'
import { shade } from 'polished'

const StyleTitle = styled.h1`
    font-size: 48px;
    line-height: 56px;
    max-width: 450px;
    color: #3a3a3a;
    margin-top: 80px;
 `;

const Form = styled.form`
    margin-top: 40px;
    margin-bottom: 80px;
    max-width: 700px;
    display: flex;

    input{
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;

        &::placeholder{
            color: #a8a8b3
        }
    }

    button{
        width:210px;
        height: 70px;
        background: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: #fff;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, '#04d361')};
        }
    }
`;

const Repositories = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 550px;
`;

export { StyleTitle as Title, Form, Repositories };