import React from 'react';
import { CardStyle } from './card.style'

interface propsCard {
    link: string,
    img: string,
    title: string,
    description: string,
}

export const CardUser: React.FC<propsCard> = (props: propsCard) => {
    const {
        img,
        link,
        title,
        description
    } = props

    return (
        <CardStyle>
            <a href={`${link}`} > <img src={img} /> </a>
            <a href={`${link}`} > <strong>{title}</strong> </a>
            <h1>{description}</h1>
        </CardStyle>
    );
}