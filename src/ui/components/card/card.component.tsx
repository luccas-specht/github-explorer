import React from 'react';
import { CardStyle } from './card.style'
import { FiChevronRight } from 'react-icons/fi'

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
        <>
            <CardStyle>
                <a href={`${link}`} > <img src={img} /> </a>
                <div className="agroup">
                    <a href={`${link}`} ><strong>{title}</strong> </a>
                    <p>{description}</p>
                </div>
                <FiChevronRight size={25} />
            </CardStyle >
        </>
    );
}