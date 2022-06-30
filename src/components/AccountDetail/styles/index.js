import styled from "styled-components";

const card = `

    overflow: auto;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    height: auto;
    padding: 2rem;
    background-color: #fff;


`

export const Main = styled.div`
    display: grid;
    gap: 2rem;
    grid-template: 
    "header header header"
    "activity panel2 image" 300px
    "activity panel2 panel1" 500px / 1fr 1fr 1fr
    ;

`

export const Header = styled.div`
    grid-area: header;
`



export const Panel1 = styled.div`
grid-area: panel1;
${card}


`
export const Panel2 = styled.div`
    grid-area: panel2;
    ${card}
    `
export const ActivityPanel = styled.div`
    grid-area: activity;
    ${card}
`

export const ImgSpan = styled.span`
    grid-area: image;
    background-position: center;
    background-size: cover;
    ${card}
${({src}) => `background-image: url(${src});`}

`

export const Row = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    `


