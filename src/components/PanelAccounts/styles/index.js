import styled from 'styled-components'

const Container = styled.div`

    display: grid;
    width: 100%;
    grid-template: "head head head"
    "cards cards cards";
    ;

`;

const Header = styled.div`
    display: block;
    width: 100%;
    grid-area: head;
`

const Cards = styled.div`
    display: grid;
    grid-area: cards;
    gap: 1rem;
    grid-auto-rows:25rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 25rem), 1fr));
`

const ButtonDiv = styled.div`


`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-between;


`

const AccountForm = styled.div`
    display: fixed;
    background-color: aqua;
    height: 100%;
    width: 200px;
    z-index: 50;
`

export { Container, Header, Cards, ButtonDiv, Grid, AccountForm }