import React from "react";
import Image from 'next/image';
import { useFlip } from "./hooks";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, flip] = useFlip();
  return (
    <div onClick={flip} className="PokemonCard Card">
      {isFacingUp ? (
        <div>
          <Image src={front} alt={`${name} front`} layout="responsive" width={500} height={500} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>
          <Image src={back} alt={`${name} back`} layout="responsive" width={500} height={500} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
