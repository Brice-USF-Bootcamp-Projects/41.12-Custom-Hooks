import React from "react";
import { useAxios } from "@/app/hooks/hooks";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";

function PokeDex() {
  const [pokemon, addPokemon, clearPokemon] = useAxios(
    "pokemon",
    "https://pokeapi.co/api/v2/pokemon/"
  );

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl text-center">
        <h3 className="text-xl font-bold text-gray-800">Select Your Pokémon:</h3>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <PokemonSelect add={addPokemon} />
          <button
            onClick={clearPokemon}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
          >
            Delete All Pokémon
          </button>
        </div>
      </div>

      {/* Card Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 w-full max-w-5xl">
        {pokemon.map((card) => (
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

