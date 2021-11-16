import styled from "styled-components";


export const NavBarStyles = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #BF505A;

    .navBar-position{
        display: flex;
    }

    h1{
    font-family: 'Lato', sans-serif;
    font-size: 2rem;
    color: #F2C572;
    font-size: 3rem;
    margin: 0 0 0 0.5rem;
    text-shadow: 2px -2px 1px black;
    text-decoration: none;
    }
    a{
        text-decoration: none;
    }
    .pokeImg{
        height: 50px;
        width: 50px;
        margin: 0.5rem 0;
    }
    @media screen and (max-width: 480px) {
        h1{
            font-size: 1.8rem;
        }
        .pokeImg{
            height: 40px;
            width: 40px;
            margin: 0.5rem 0;
        }

`