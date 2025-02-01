import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import { formatCard } from "./helpers";

/* Renders a list of playing cards.
 * Can also add a new card at random,
 * or remove all cards. */
function CardTable() {
  const [cards, addCard, clearCards] = useAxios(
    "cards",
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        Pick a card, any card!
      </h3>

      {/* Buttons */}
      <div className="space-x-4 mb-6">
        <button
          onClick={() => addCard(formatCard)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Add a playing card!
        </button>
        <button
          onClick={clearCards}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition"
        >
          Clear the table
        </button>
      </div>

      {/* Card Display Area */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

export default CardTable;
