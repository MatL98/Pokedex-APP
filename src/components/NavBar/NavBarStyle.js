import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@700&display=swap');
</style>

export const NavBarStyles = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #BF505A;

    .navBar-position{
        display: flex;
    }

    h1{
    font-family: 'Balsamiq Sans', cursive;
    font-size: 2rem;
    color: #F2C572;
    font-size: 2.5rem;
    margin: 0 0 0 0.5rem;
    text-shadow: 2px -2px 1px black;
    text-decoration: none;
    }
    a{
        text-decoration: none;
    }

    input{
        height: 25px;
        width: 500px;
        border: none;
        border-radius: 2px;
    }

    .pokeImg{
        height: 50px;
        width: 50px;
    }
`