import React from 'react';

function IndianPlayers() {

  const oddTeam = ["Kohli", "Pant", "Hardik"];
  const evenTeam = ["Rohit", "Gill", "Dhoni"];

  const [captain1, vc1, player1] = oddTeam;
  const [captain2, vc2, player2] = evenTeam;

  
  const T20players = ["Surya", "Ishan"];
  const RanjiTrophyPlayers = ["Rahane", "Jadeja"];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  const playerRoles = new Map([
    ["Kohli", "Captain"],
    ["Pant", "VC"],
    ["Hardik", "Player"],
    ["Rohit", "Captain"],
    ["Gill", "VC"],
    ["Dhoni", "Player"]
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Odd Team</h2>
      <p>Captain: {captain1}, VC: {vc1}, Player: {player1}</p>

      <h2>Even Team</h2>
      <p>Captain: {captain2}, VC: {vc2}, Player: {player2}</p>

      <h2>Merged Team (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((player, i) => <li key={i}>{player}</li>)}
      </ul>

      <h2>Player Roles (Using Map)</h2>
      <ul>
        {[...playerRoles.entries()].map(([name, role], i) => (
          <li key={i}>{name} - {role}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
