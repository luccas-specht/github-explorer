import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/svgs/logo.svg'
import {
    Title,
    Form,
    Repositories
} from './dashboard.style';

import { useGitHubApi } from '../../../hook'
import { CardUser } from '../../components'

interface RepositoryApi {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

export const Dashboard: React.FC = () => {
    const [newRepository, setNewRepository] = useState('')
    const [cards, setCards] = useState<RepositoryApi[]>([])
    const { getRepository } = useGitHubApi()


    const handleSubmit = (event: any) => {
        event.preventDefault()
        getNewRepository()
    }

    const handleChange = (event: any) => {
        setNewRepository(event.target.value)
    }


    async function getNewRepository() {
        const response = await getRepository(newRepository);
        setCards([...cards, response])
        setNewRepository('')
    }

    useEffect(() => {
        getNewRepository();
    }, [])

    return (
        <>
            <img src={logoImg} ></img>
            <Title>Explore repositórios no Github</Title>

            <Form onSubmit={handleSubmit}>
                <input placeholder='Digite o nome do repositório' onChange={handleChange} />

                <button type='submit'>pesquisar </button>
            </Form>

            <Repositories>
                {cards.map(card =>
                    <CardUser
                        key={card?.full_name}
                        img={card?.owner.avatar_url}
                        link={'teste'}
                        description={card?.description}
                        title={card?.full_name}
                    />

                )}
            </Repositories>

        </>
    )
}