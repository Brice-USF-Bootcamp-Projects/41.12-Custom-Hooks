import React from "react";
import Image from "next/image";
import { useFlip } from "@/app/hooks/hooks";

/* Renders a single Pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, flip] = useFlip();

  return (
    <div
      onClick={flip}
      className="w-64 p-4 bg-white shadow-lg border border-gray-300 rounded-lg transform transition duration-300 cursor-pointer hover:scale-105"
    >
      {isFacingUp ? (
        <div className="flex flex-col items-center">
          {/* Pokémon Front Image */}
          <Image
            src={front}
            alt={`${name} front`}
            width={150}
            height={150}
            className="rounded-md"
          />

          {/* Pokémon Name */}
          <p className="mt-3 text-lg font-semibold text-gray-800">{name}</p>

          {/* Pokémon Stats */}
          <ul className="mt-2 text-sm text-gray-600">
            {stats.map((stat) => (
              <li key={stat.name} className="flex justify-between w-full">
                <em className="text-gray-700">{stat.name}:</em> {stat.value}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {/* Pokémon Back Image */}
          <Image
            src={back}
            alt={`${name} back`}
            width={150}
            height={150}
            className="rounded-md"
          />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
