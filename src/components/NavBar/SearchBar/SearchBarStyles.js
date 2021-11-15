import styled from "styled-components";


export const SearchBarStyle = styled.div`

    form{
        display: flex;
        flex-direction: row;
        justify-content: right;
        margin: 1rem 1rem;
    }
    
    input{
        height: 25px;
        width: 486px;
        border-radius: 5px;
        margin-right: 0.5rem;
    }
    .btnSearch{
        border-radius: 6px;
        font-size: 1rem;
        padding: 0 0.2rem;
        background-color: #BF505A;
        height: 1.5rem;
        width: 4rem;
        color: white;
        border: none;
    }

    .pokemonInfo{
        position: absolute;
        top: 250px;
        
    }
`