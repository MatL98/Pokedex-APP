import React from "react";
import pokeImg from "../../img/pokedex.png"
import { Link } from "react-router-dom";
import {NavBarStyles} from "./NavBarStyle"

const NavBar = () =>{
    return (
    <NavBarStyles>
        <Link className="navBar-position" to="/" key="1"><img src={pokeImg} className="pokeImg" alt="" />
        <h1>POKEDEX</h1>    
        </Link>
        <input type="text"/>
    </NavBarStyles>
    )
}
export default NavBar;