import styled from 'styled-components';
import backgroundLogin from '../../assets/img/background-login.jpg';
import { TextField } from '@material-ui/core';

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  min-height: 600px;
  overflow: hidden;
  background: linear-gradient(rgba(55, 55, 55, 0.4), rgba(55, 55, 55, 0.4)), 
  url(${backgroundLogin});
  background-position: center;
  background-size: cover;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 12px;
  color: white;
  text-transform: uppercase;
  margin-top: 34px;
  margin-bottom: 24px;
`;

const Input = styled(TextField)`
  width: 350px;
  background: #373737;
  border: 0.468916px solid #65AB57;
  box-sizing: border-box;
  border-radius: 9.37831px;
  border-color: rgba(101,171,87,0.7);

    label{
    color: white;
    }
`;

const Button = styled.button`
    width: 350px;
    height: 44px;
    margin-top: 13px;
    border-radius: 23px;
    border: none;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    background-color: #65AB57;
    background-position: center;
    outline: none;
`;

const Form = styled.form`
    padding-top: 10px;
    align-self:center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 250px;
`;


export { Background, Container, Title, Input, Button, Form }