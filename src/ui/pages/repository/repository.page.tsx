import React from 'react';
import { useLocation, Link } from 'react-router-dom'

import logoImg from '../../assets/svgs/logo.svg'
import { FiChevronLeft } from 'react-icons/fi'

import { Header } from './repository.style'

interface PropsState {
    title?: string;
}

export const Repository: React.FC = () => {
    const { state } = useLocation<PropsState>();

    return (
        <>
            <Header>
                <img src={logoImg} alt='Github Explorer image' />
                <Link to='/dashboard'>
                    <FiChevronLeft size={21} />
                     Voltar
                </Link>
            </Header>
        </>
    )
}