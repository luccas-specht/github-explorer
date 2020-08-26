import React from 'react'
import { Link } from 'react-router-dom'
import { CardStyle } from './card.style'
import { FiChevronRight } from 'react-icons/fi'

interface propsCard {
    id?: number
    link?: string,
    img?: string,
    title?: string,
    description?: string,
}

export const CardUser: React.FC<propsCard> = ({ id, img, link, title, description }: propsCard) => {
    return (
        <>
            <CardStyle>
                <a href={`${link}`} > <img src={img} /> </a>
                <div className="agroup">
                    <a href={`${link}`} ><strong>{title}</strong> </a>
                    <p>{description}</p>
                </div>
                <Link to={{ pathname: `/repository/${id}`, state: { title } }}><FiChevronRight size={25} /> </Link>
            </CardStyle >
        </>
    );
}