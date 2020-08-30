import React from 'react';
import { Background, Img } from './logo-linear.style';

import logoLinear from '../../assets/img/vv-logo-linear.png';

export const LogoLinear: React.FC = () => (
    <Background>
        <Img src={logoLinear} alt="logo-verdes-vales-linear" />
    </Background>
);