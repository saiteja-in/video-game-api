import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [gameTitle, setGameTitle] = useState("");
  const [searchedGames, setSearchedGames] = useState([]);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((res) => res.json())
      .then((data) => setSearchedGames(data));
  };

  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search for the Game</h1>
        <input
          onChange={(e) => setGameTitle(e.target.value)}
          type="text"
          placeholder="8 Ball Pool"
        />
        <button onClick={searchGame}>Submit</button>
        <div className="games">
          {searchedGames.map((game, key) => {
            return (
              <div className="game" key={key}>
                <div className="game-title">{game.external}</div>
                <img src={game.thumb} alt={game.external} />
                <div className="game-price">Cheapest Price: ${game.cheapest}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="dealsSection">
        <h1>Deals Section</h1>
      </div>
    </div>
  );
};

export default App;
