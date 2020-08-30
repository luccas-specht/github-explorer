import React from 'react';
import {
    Container,
    Input
} from './button-search.style';

import { HiOutlineSearch } from 'react-icons/hi';

export const ButtonSearchHeader: React.FC = () => (
    <Container>
        <HiOutlineSearch size={23} color='white' />
        <Input placeholder='Buscar cliente, produto ou ID de transação/ticket aberto...' />
    </Container>
);