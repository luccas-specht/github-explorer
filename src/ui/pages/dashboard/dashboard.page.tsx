import React, { useState, useEffect, useCallback } from 'react';
import logoImg from '../../assets/svgs/logo.svg'
import {
    Title,
    Form,
    Repositories
} from './dashboard.style';

import { useGitHubApi } from '../../../hook'
import { CardUser } from '../../components'

import dd from '../../assets/img/dd.jpeg'
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
                {/* 13:24*/}

                {cards.map(card =>
                    <CardUser
                        key={card?.full_name}
                        img={card?.owner.avatar_url}
                        link={'teste'}
                        description={card?.description}
                        title={card?.full_name}
                    />
                )}

                {/* <CardUser
                    img={dd}
                    link={'https://app.rocketseat.com.br/node/nivel-03/group/criando-a-aplicacao/lesson/conectando-a-api'}
                    description={'Criação de um app que se assemelha ao jogo original FlappyBird, usando a biblioteca, lib GDX, para Android em java, na qual pude aprender a consumir a biblioteca e gerar animações em 2D.'}
                    title={'oi'}
                /> */}
            </Repositories>
        </>
    )
}