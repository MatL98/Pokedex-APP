import styled from "styled-components";


export const CardPokemonStyles = styled.div`

    box-shadow: 1px 1px 1px rgb(0,0,0,0.25);
    border-radius: 5px;
    margin: 0.5rem 1rem;
    
    .pokeInfo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        text-transform: capitalize;
        font-size: 1.8rem;
    }
    h2{
        font-size: 1.2rem;
    }
    img{
        height: 200px;
        width: 200px
    }
    .pokemomnType{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0.2rem 0.5rem;
    }
    .pokemomnType > div{
        margin: 0 0.5rem;
        text-transform: capitalize;
    }

    @media screen and (max-width: 480px) {
        img{
            height: 100px;
            width: 100px
        }
        @media screen and (max-width: 375px) {
        img{
            height: 100px;
            width: 100px
        }
`