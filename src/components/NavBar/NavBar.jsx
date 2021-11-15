import React from "react";
import pokeImg from "../../img/pokedex.png"
import { Link } from "react-router-dom";
import {NavBarStyles} from "./NavBarStyle"
import SearchBar from "./SearchBar/SearchBar";

const NavBar = () =>{
    return (
    <NavBarStyles>
        <Link className="navBar-position" to="/" key="1"><img src={pokeImg} className="pokeImg" alt="" />
        <h1>POKEDEX-APP</h1>    
        </Link> 
    </NavBarStyles>
    )
}
export default NavBar;