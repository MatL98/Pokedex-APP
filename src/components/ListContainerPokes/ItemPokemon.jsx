import React from 'react';
import { CardPokemonStyles } from './CardItemPokemon';

const ItemPokemon = (pokemons)=>{
    const pokes = pokemons.pokemons
    return(
        <CardPokemonStyles>
        <div className="pokeInfo">
            <span>#{pokes.id}</span>
            <img src={pokes.sprites.front_default}/>
            <h1>{pokes.name}</h1>
            <div className="pokemomnType">
                {pokes.types.map((t)=>{
                    return <div>{t.type.name}</div>
                })}
            </div>
        </div>
        </CardPokemonStyles>
)
}
export default ItemPokemon
