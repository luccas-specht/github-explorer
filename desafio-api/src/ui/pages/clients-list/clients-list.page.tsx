import React, { useState, useEffect } from 'react';
import { Header, CardUser } from '../../components';
import { useClient } from '../../../hooks';
import {
    Container,
    InfosHeader,
    Title,
    PathPage,
    CardClients,
    BorderTopSearch
} from './clients-list.style';

import { FiChevronRight } from 'react-icons/fi';

interface PropsClients {
    id?: number,
    nome?: string
}

export const ClientsList: React.FC = () => {
    const [clients, setClients] = useState<PropsClients[]>([]);
    const { getClients } = useClient();
    const name = localStorage.getItem('@userName');

    async function getAllClients() {
        const response = await getClients();
        setClients(response)
    }

    useEffect(() => {
        getAllClients();
    }, [])

    return (
        <>
            <Header name={`${name}`} />
            <Container>
                <InfosHeader>
                    <Title> Bem vindo, {`${name}`} </Title>
                    <PathPage> Home <FiChevronRight size={14} color='#898B8E' /> Cadastro </PathPage>
                </InfosHeader>
                <BorderTopSearch />
                <CardClients>
                    {clients.map(client => (
                        <CardUser
                            key={client?.id}
                            name={client?.nome}
                            id={client?.id}
                        />
                    ))}
                </CardClients>
            </Container>
        </>
    );
}