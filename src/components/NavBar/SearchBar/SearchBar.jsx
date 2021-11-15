import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";
import ItemPokemon from "../../ListContainerPokes/ItemPokemon";
import { SearchBarStyle } from "./SearchBarStyles";


const SearchBar = (props) => {
  const {onSearch} = props
  const [search, setSearch] = useState("");
  const { searchPokemon, pokemon } = useContext(Context);

  const getName = (e) => {
    let pokemonTyped = e.target.value;
    setSearch(pokemonTyped);
    console.log(search);
  };

  const goSearch = async (e) => {
    onSearch(search);
  };

  return (
    <SearchBarStyle>
      <div className="searchBar"> 
          <input id="searchBar" onChange={getName} type="text" placeholder="Buscar Pokemon..."></input>
          <button onClick={goSearch} type="submit" className="btnSearch">
            Buscar
          </button>
      </div>
    </SearchBarStyle>
  );
};
export default SearchBar;
