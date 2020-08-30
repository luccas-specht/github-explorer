import React from 'react';
import logoImg from '../../assets/svgs/logo.svg'
import {
    Title,
    Form,
    Repositories
} from './dashboard.style';

import { CardUser } from '../../components'
import dd from '../../assets/img/dd.jpeg'

export const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} ></img>
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder='Digite o nome do repositório' />
                <button type='submit'>Pesquisar </button>
            </Form>

            <Repositories>
                {/* <CardUser img={dd} link={'https://github.com/luccas-specht'} description='top' title='luccas' /> */}
            </Repositories>

        </>
    )
}