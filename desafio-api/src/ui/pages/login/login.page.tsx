import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import {
    Background,
    Container,
    Title,
    Input,
    Button,
    Form
} from './login.style'

import LogoVerdesVales from '../../assets/img/vv-logo.png';

export const Login: React.FC = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const { authentication } = useAuth();
    const history = useHistory();

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }


    const handleSubmit = (event: any) => {
        event.preventDefault()
        if (name === '' || password === '') {
            alert('Você precisa preencher todos os campos');
        } else {
            login();
        }
    }

    const login = async () => {
        const response = await authentication(name, password);
        const { userId, token, userName } = response

        localStorage.setItem('@token', token);
        localStorage.setItem('@userName', userName);
        history.push(`/client/${userId}`)
    }

    return (
        <Background>
            <Container>
                <img src={LogoVerdesVales} alt="Verdes Vales" />
                <Title>Plataforma de Gestão 360</Title>

                <Form onSubmit={handleSubmit}>
                    <Input
                        id="tx-username"
                        label="Nome de usuário"
                        variant="outlined"
                        type="TextField"
                        placeholder="Nome de usuário"
                        onChange={handleChangeName}
                        value={name}
                    />

                    <Input
                        id="tx-password"
                        label="Senha"
                        variant="outlined"
                        type="password"
                        placeholder="Senha"
                        onChange={handleChangePassword}
                        value={password}
                    />

                    <Button> login </Button>
                </Form>
            </Container>
        </Background>
    );
}