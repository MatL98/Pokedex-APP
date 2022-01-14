import React, { useState } from "react";
import { SearchBarStyle } from "./SearchBarStyles";


const SearchBar = (props) => {
  const {onSearch} = props
  const [search, setSearch] = useState("");

  const getName = (e) => {
    let pokemonTyped = e.target.value;
    let lowerValue = pokemonTyped.toLowerCase()
    setSearch(lowerValue);
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
