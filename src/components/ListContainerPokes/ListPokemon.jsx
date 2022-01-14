import React, { useEffect, useState, useContext } from "react";
import ItemPokemon from "./ItemPokemon"
import { PokedexStyles } from "./PokedexStyle";
import { Context } from "../../Context/Context";
import Pagination from "../NavBar/SearchBar/Pagination";
import SearchBar from "../NavBar/SearchBar/SearchBar";






const ListPokemon = () =>{
    const [pokemones, setPokemones] = useState([])
    const [page, setPage] = useState(0)
    const [total, setTotal] = useState()
    const [loading , setLoading] = useState(true)
    const { getPokemonData, getPokemon, searchPokemon } = useContext(Context)

    const getNames = async ()=>{
            setLoading(true)
            const data = await getPokemon(15, 15 * page)
            const pokemonsNames = data.results;
            const promises = pokemonsNames.map(async(pokes)=>{
                return await getPokemonData(pokes.url)
            })
            const result = await Promise.all(promises)
            const totalPokemons = data.count;
            const totalPages = (Math.floor(totalPokemons / 15))
            setTotal(totalPages)
            setPokemones(result)
            setLoading(false)           
    }
    useEffect(()=>{
        getNames()
    }, [page])
    
    const onSearch = async (pokemon) =>{
        setLoading(true)
        const result = await searchPokemon(pokemon)
            setPokemones([result])
        setLoading(false)
    }


    const initPage = () =>{
        setPage(0)
    }
    const nextPage = () =>{
        setPage(page + 1)
    }
    const lastPage = () =>{
        if (page <= 0) {
            setPage(0)
        }else{
            setPage(page - 1)
        }
    }

    return(
        <PokedexStyles>
        <SearchBar onSearch={onSearch}/>
        <div className="title">
            <h1 className="pokedexH1" >Pokedex</h1>
            <div>
                <h2>Página</h2>
                <Pagination 
                    page={page}
                    firstPage={initPage}
                    totalPages={total}
                    onLeftClick={lastPage}
                    onRightClick={nextPage}/>
            </div>
        </div>
        {loading ? (<h4>cargando pokemones...</h4>)
        :
        (<div className="pokedex">
            {pokemones.map((pokes, idx)=>{
                return <ItemPokemon pokemons={pokes} key={pokes.name}/>})}</div>)
        }
        </PokedexStyles>
    )
}
export default ListPokemon;