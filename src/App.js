import PokeImage from "./components/ListContainerPokes/ListPokemon";
import { useEffect, useState } from "react";
import {BrowserRouter, Switch, Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import './App.css';
import ListPokemon from "./components/ListContainerPokes/ListPokemon";
import { PokemonProvider } from "./Context/Context";
import ItemPokemon from "./components/ListContainerPokes/ItemPokemon";
import SearchBar from "./components/NavBar/SearchBar/SearchBar";



export default function App() {

  return (
    
    <PokemonProvider>
      <BrowserRouter>
        <NavBar/>
        <ListPokemon>
          <ItemPokemon/>
        </ListPokemon>
      </BrowserRouter>
    </PokemonProvider>
    
  )
}