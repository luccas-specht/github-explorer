import React from 'react';
import { Container } from './header.style';
import {
    LogoLinear,
    ButtonSearchHeader,
    InfosHeaderUser
} from '../../components';

interface PropsUserInfo {
    imagePerfil?: string;
    name?: string;
}

export const Header: React.FC<PropsUserInfo> = ({ imagePerfil, name }) => (
    <Container>
        <LogoLinear />
        <ButtonSearchHeader />
        <InfosHeaderUser
            imagePerfil={imagePerfil}
            name={name} />
    </Container>
);