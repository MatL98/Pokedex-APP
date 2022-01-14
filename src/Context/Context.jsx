import React, { createContext, useState } from "react";

export const Context = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState();

  const searchPokemon = async (search) => {
    const data = await ApiPokemon(search);
    setPokemon(data);
    return data;
  };

  const ApiPokemon = async (pokemon) => {
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(pokeApi);
    const data = await response.json();
    return data;
  };
  const getPokemonData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const getPokemon = async (limit, offset) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  return (
    <Context.Provider
      value={{
        searchPokemon,
        pokemon,
        getPokemonData,
        getPokemon,
      }}
    >
      {children}
    </Context.Provider>
  );
};
