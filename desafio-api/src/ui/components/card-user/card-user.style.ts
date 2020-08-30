import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    border-bottom: 1px solid #898B8E;
    width: 100%;
    height: 65px;
`;

const ContainerLeft = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
`;

const Img = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    object-fit: cover;
`;

const Title = styled.h3`
    margin: 0;
    padding: 0;
    padding-left: 30px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 21px;
    display: flex;
    align-items: center;
    letter-spacing: 0.130662px;
    text-transform: uppercase;
    color: #373737;
    mix-blend-mode: normal;
    transform: rotate(0.06deg);
`;


const ContainerRight = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    justify-content: space-around;
`;


export { Container, ContainerLeft, ContainerRight, Img, Title }