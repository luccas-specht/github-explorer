import styled from 'styled-components';

const CardStyle = styled.div`
    margin-top:16px;
    max-width: 700px;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    transition: transform 0.4s;
    
    &:hover{
        transform: translateX(20px);
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }

    a{
        text-decoration: none
    }

    img{
        width: 64px;
        height: 64px;
        border-radius: 50%;
    }

    div{
        margin-left:16px;

        strong{
            font-size: 20px;
            color: #3D3D4D;
        }

        p{
            font-size: 18px;
            color: #a8a8b3;
            margin-top:4px;
        }
    }

    svg{
        min-width: 25px;
        margin-top: 5px;
        margin-left: auto;
        color:#cbcbd6;
        cursor: pointer;
    }
`;

export { CardStyle }