import styled from "styled-components";

const card = `

    overflow: auto;
    border-radius: 5px;
    height: auto;
    padding: 0.5rem;
    background-color: #fff;


`

export const Main = styled.div`
    display: grid;
    gap: 2rem;
    grid-template: 
    "header header header"
    "image panel2 panel1" 300px
    "activity panel2 panel1" 800px / 1fr 1fr 1fr
    ;

`

export const Header = styled.div`
    display: flex;
    align-items: center;
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

export const Item = styled.div`
    margin-top: 2rem;
    border: 1px solid #CECECE;
    padding: 1rem;
    border-radius: 5px;

`


