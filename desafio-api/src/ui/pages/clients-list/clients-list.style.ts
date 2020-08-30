import styled from 'styled-components';

const Container = styled.div`
    margin-top: 15px;
    margin-left: 290px;
    width: 1400px;
    min-height: 600px;
`;

const InfosHeader = styled.div`
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    width: 650px;
    justify-content: space-between;
`;

const Title = styled.h6`
    margin: 0;
    padding: 0;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 15px;
    color: #373737;
`;

const PathPage = styled.h6`
    display: flex;
    align-items:center;
    margin: 0;
    padding: 0;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: 300;
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    color: #898B8E;
`;

const CardClients = styled.div`
    margin-top:10px;
    width: 100%;
    height: 600px;
    background: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    &::-webkit-scrollbar{
        background: none;
        width: 7px;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: #65AB57;
        width: 10px;
        height: 5px;
    }
`;

const BorderTopSearch = styled.div`
    width: 100%;
    margin-bottom: -10px;
    display: flex;
    align-items: center;
    min-height: 23px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #373737;
    justify-content: space-around;
`;


export { Container, InfosHeader, Title, PathPage, CardClients, BorderTopSearch }