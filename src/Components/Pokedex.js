import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const { pokemons, loading } = props;
    console.log("pokemons ", pokemons)
    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokedex</h1>
                <div>Paginacion</div>
            </div>
            {loading ? (
                <div>Cargando, bestia segura ...</div>
            ) : (
                <div className="pokemon-grind">
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
export default Pokedex;