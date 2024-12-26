import { useState } from 'react';
import messi from "../assets/messi.jpg"
import neymare from "../assets/neymare.webp"
import ronaldo from "../assets/ronaldo.webp"
function Portfolio() {
  const [selectedPlayer, setSelectedPlayer] = useState('messi');

  const players = {
    messi: {
      name: 'Lionel Messi',
      image: messi,
      description:
        'Argentine professional footballer, widely regarded as one of the greatest players of all time.',
      achievements: [
        '7x Ballon d\'Or winner',
        'FIFA World Cup winner 2022',
        'Multiple Champions League titles',
        'Olympic gold medalist'
      ],
      stats: {
        appearances: 1000,
        goals: 750,
        assists: 300,
        trophies: 40
      }
    },
    neymar: {
      name: 'Neymar Jr',
      image: neymare,
      description: 'Brazilian professional footballer known for his dribbling skills and creativity sdfa   Neymar Jr started his career with the São Paulo-based club Santos in 2003 and was promoted to the first team aged 17. His debut match was in March 2009 against Oeste, and the following week he scored his first goal with the team against Mogi Mirim. Already compared to legends Robinho and Pelé at the age of 21, it was only a matter of time before the giants of Europe came calling, and Neymar Jr simply couldn’t refuse FC Barcelona’s offer in 2013.  .',
      achievements: [
        'Olympic gold medalist',
        'Champions League winner',
        'Multiple league titles',
        'Copa Libertadores winner'
      ],
      stats: {
        appearances: 500,
        goals: 300,
        assists: 150,
        trophies: 20
      }
    },
    ronaldo: {
      name: 'Cristiano Ronaldo',
      image: ronaldo,
      description:
        'Portuguese professional footballer, known for his scoring ability and physical prowess.',
      achievements: [
        '5x Ballon d\'Or winner',
        'Multiple Champions League titles',
        'European Championship winner',
        'Multiple league titles'
      ],
      stats: {
        appearances: 1100,
        goals: 800,
        assists: 220,
        trophies: 35
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-center space-x-4">
        {Object.keys(players).map((player) => (
          <button
            key={player}
            onClick={() => setSelectedPlayer(player)}
            className={`rounded-lg px-4 py-2 transition-colors duration-300 ${
              selectedPlayer === player
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {players[player].name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Player Details */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <img
            src={players[selectedPlayer].image}
            alt={players[selectedPlayer].name}
            className="mb-4 w-full rounded-lg"
          />
          <h2 className="mb-4 text-3xl font-bold text-blue-600">
            {players[selectedPlayer].name}
          </h2>
          <p className="mb-4 text-gray-600">{players[selectedPlayer].description}</p>
        </div>

        {/* Achievements and Stats */}
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-blue-600">Achievements</h3>
          <ul className="list-inside list-disc space-y-2">
            {players[selectedPlayer].achievements.map((achievement, index) => (
              <li key={index} className="text-gray-600">
                {achievement}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 mb-4 text-2xl font-bold text-blue-600">Statistics</h3>
          <div className="grid grid-cols-2 gap-4 text-gray-600">
            <div>
              <p className="font-bold">Appearances:</p>
              <p>{players[selectedPlayer].stats.appearances}</p>
            </div>
            <div>
              <p className="font-bold">Goals:</p>
              <p>{players[selectedPlayer].stats.goals}</p>
            </div>
            <div>
              <p className="font-bold">Assists:</p>
              <p>{players[selectedPlayer].stats.assists}</p>
            </div>
            <div>
              <p className="font-bold">Trophies:</p>
              <p>{players[selectedPlayer].stats.trophies}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;