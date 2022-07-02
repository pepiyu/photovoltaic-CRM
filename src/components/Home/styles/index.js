import styled from "styled-components";

export const Page = styled.div`
    display: grid;
    width: 100%;
    height: 1vh;
    grid-template: 
        "navbar navbar"
        "sidebar main"
        "sidebar main"
        /200px 1fr;
`

export const Main = styled.div`
    padding-top: 2rem;
    grid-area: main;
    `

