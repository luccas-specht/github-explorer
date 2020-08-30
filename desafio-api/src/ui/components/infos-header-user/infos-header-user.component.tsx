import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Img,
    InfoUser,
    ButtonLogOff
} from './infos-header-user.style';

import { FiChevronRight } from 'react-icons/fi';
import { IoMdExit } from 'react-icons/io';

import imagePerfilDefault from '../../assets/img/imagem-default-admin.png';

interface PropsUserInfo {
    imagePerfil?: string;
    name?: string;
}

export const InfosHeaderUser: React.FC<PropsUserInfo> = ({ imagePerfil, name }) => {
    const history = useHistory();

    const handleLogOff = (event: any) => {
        event.preventDefault();

        localStorage.clear();
        history.push('/');
    }

    return (
        <Container>
            <Img src={imagePerfil} />
            <InfoUser>
                {name}
                <Link to='#'>
                    ver perfil
                <FiChevronRight size={13} color='green' />
                </Link>
            </InfoUser>
            <ButtonLogOff onClick={handleLogOff}>
                sair
            <IoMdExit size={20} />
            </ButtonLogOff>
        </Container >
    );
}

InfosHeaderUser.defaultProps = {
    imagePerfil: imagePerfilDefault,
    name: 'Luccas Specht'
}