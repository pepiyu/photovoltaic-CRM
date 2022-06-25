import styled from "styled-components";


export const Card = styled.div`
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    height: auto;
    /* grid-column: span 2; */
    `

export const Img = styled.img`
    border-radius: 5px 5px 0 0;
    object-fit: cover;
    width: 100%;
    height: 200px;
    ${({src}) => `src: ${src}`}
    `

export const CardBody = styled.div`
    height: 100%;
    padding: 1rem;
    font-size: 0.9rem;

    h2 {
        font-size: 1rem;
    }

    a:link {
        text-decoration: none;
        color: black
    }

    p {
        margin: 0
    }

`

