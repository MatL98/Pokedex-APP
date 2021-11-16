import styled from "styled-components";


export const PokedexStyles = styled.div`
    .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 1rem;
    }
    .pokedexH1{
        font-size: 2.5rem;
        color: #BF505A;
    }
    .pokedex{
        display: grid;
        grid-template-areas: "pokeCard pokeCard pokeCard"
    }
    h4{
        margin: 0.5rem 1rem;
    }
    .pages{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .pages > button{
        width: 1.5rem;
        font-size: 1.2rem;
        background-color: white;
        border: none;
    }
    .searchBar{
        display: flex;
        flex-direction: row;
        justify-content: right;
        margin: 0.5rem 1rem;
    }
    @media screen and (max-width: 480px) {
        .pokedex{
            display: grid;
            grid-template-areas: "pokeCard pokeCard";
            margin: 0 0.2rem;
        }
    @media screen and (max-width: 375px) {
        .pokedex{
            display: grid;
            grid-template-areas: "pokeCard pokeCard";
            margin: 0 0.1rem;
        }
    }
`