import styled from 'styled-components';

const Container = styled.div`
    width: 15%;
    margin-left: -15px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Img = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
`;

const InfoUser = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 12.8062px;
    line-height: 15px;
    color: #65AB57;
   
        a{  
            display: flex;
            align-items: center;
            font-family: Ubuntu;
            font-style: normal;
            font-weight: bold;
            font-size: 9px;
            line-height: 10px;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            color: #FFFFFF; 
            text-decoration: none;
        }
`;

const ButtonLogOff = styled.button`
    width: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 10px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #FFFFFF; 
    border: none;
    background: none;
    outline: none;
`;

export { Container, Img, InfoUser, ButtonLogOff }