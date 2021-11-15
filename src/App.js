import PokeImage from "./components/FotoPokemon";
import { useEffect, useState } from "react";
import {BrowserRouter, Switch, Router} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import './App.css';


export default function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
    </BrowserRouter>
    </>
  )
}