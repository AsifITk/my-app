import React, { useEffect, useState } from "react";

import Card from "./Card";


function List() {
    let [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=21")
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data.results);
                console.log(pokemon);

            });
    }, []);
    return (
        <div className="list">
            {
                pokemon && (
                    pokemon.map((pokemon) => {
                        return <Card key={pokemon.url} url={pokemon.url} />
                    }))
            }
        </div>
    )
}

export default List;