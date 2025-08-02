import React from 'react';

function ListOfPlayers() {
  
  const players = [
    { name: "Virat", score: 95 },
    { name: "Rohit", score: 85 },
    { name: "Gill", score: 45 },
    { name: "Dhoni", score: 99 },
    { name: "Pant", score: 62 },
    { name: "Rahul", score: 50 },
    { name: "Hardik", score: 40 },
    { name: "Bumrah", score: 80 },
    { name: "Shami", score: 72 },
    { name: "Ashwin", score: 68 },
    { name: "Siraj", score: 55 }
  ];

  const below70 = players.filter(player => player.score < 70);

  const below70Names = new Set(below70.map(p => p.name));

  return (
    <div style={{ padding: "20px" }}>
      <h2>All Players (Name - Score)</h2>
      <ul>
        {players.map((p, i) => (
          <li key={i}>
            {p.name} - {p.score} {below70Names.has(p.name) && <span style={{ color: "red" }}> [Low Score]</span>}
          </li>
        ))}
      </ul>

      <h3>Players with Score Below 70</h3>
      <ul>
        {[...below70Names].map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;
