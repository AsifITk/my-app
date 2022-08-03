import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Card({ url }) {
    let [pokemon, setPokemon] = useState(null);
    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data);
                console.log(pokemon);
            });
    }, []);
    return (
        <div className="card">

            {
                pokemon && (
                    <div>

                        <p className="card-title">{pokemon.name}</p>
                        {/* <img className="poke-img" src={pokemon.sprites.front_default} alt="" /> */}
                        <img className="poke-img" src={pokemon.sprites.other.home['front_default']
                        } alt="" />
                        <p>{pokemon.types[0].type.name}</p>

                    </div>
                )
            }
        </div>
    )
}

export default Card;
