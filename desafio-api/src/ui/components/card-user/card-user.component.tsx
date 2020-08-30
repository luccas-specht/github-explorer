import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    ContainerLeft,
    ContainerRight,
    Img,
    Title
} from './card-user.style';

import { FiChevronRight } from 'react-icons/fi';
import { FaPenSquare } from 'react-icons/fa';
import { VscFilter } from 'react-icons/vsc';
import { IoMdCalendar } from 'react-icons/io';
import { IoMdChatboxes } from 'react-icons/io';
import { TiArrowForwardOutline } from 'react-icons/ti';

import imageDefault from '../../assets/img/image-default-clients.png';

interface PropsCardUser {
    image?: string,
    name?: string,
    id?: number
}

export const CardUser: React.FC<PropsCardUser> = ({ image, name, id }) => (
    <Container>
        <ContainerLeft>
            <Img src={image} />
            <Title>
                {name}
            </Title>
        </ContainerLeft>
        <ContainerRight>
            <VscFilter size={18} color='#898B8E' />
            <IoMdCalendar size={25} color='#65AB57' />
            <IoMdChatboxes size={23} color='#65AB57' />
            <TiArrowForwardOutline size={23} color='#65AB57' />
            <Link to='#'>
                <FaPenSquare size={25} color='#373737' />
            </Link>
            <Link to='#'>
                <FiChevronRight size={20} color='#373737' />
            </Link>
        </ContainerRight>
    </Container>
)

CardUser.defaultProps = {
    image: imageDefault,
    name: 'Guilherme Silvera Martins Edwards Menezes',
    id: 1,
}