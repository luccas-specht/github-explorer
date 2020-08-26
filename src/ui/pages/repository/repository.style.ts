import styled from 'styled-components'
import { shade } from 'polished'

const Header = styled.header`
    min-width: 1100px;
    align-items: center;
    display: flex;
    justify-content: space-between;

    a{
        display: flex;
        align-items: center;
        text-decoration:none;
        color: #a8a8b3;
        transition: 0.3s;

        &:hover{
            transform: translateX(-20px);
            color: ${shade(0.3, '#a8a8b3')};
        }

        svg{
            margin-right: 0;
        }
    }
`;

export { Header }