import { useState } from "react"
import pokemonJSON from "../../data/pokemon.json"

import './PokemonList.css'
import PokemonItem from "../PokemonItem/PokemonItem"
function PokemonList() {
    const [pokemons] = useState(pokemonJSON)
    const [filterPokemons, setFilterPokemons] = useState(pokemonJSON);
    const handleSearch = (e) => {
        let search = pokemons.filter((item) => {
            return item.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setFilterPokemons(search)
    }
    return (
        <div>
            <input type="text" className="search" placeholder='Cari Pokemon...' onChange={handleSearch} />
            <div className="list-pokemon">
                {filterPokemons.length == 0 ? (<div>Data tidak ditemukan</div>) : (filterPokemons.map((pokemon) => (
                    <PokemonItem key={pokemon.id} pokemon={pokemon} />
                ))
                )}
            </div>
        </div>
    )
}

export default PokemonList