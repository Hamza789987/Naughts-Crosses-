import Board from "./Board";
import { useState } from "react";
import { Link } from "react-router-dom";
const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("noughts");
  const [playerWon, setPlayerWon] = useState("");

  return (
    <div className='mainContainer'>
      <h4 className='turns'>{currentPlayer} turn</h4>

      <h2>{playerWon.toUpperCase()}</h2>
      <button className='back'>
        <Link to='/'>Go Back</Link>
      </button>

      <Board
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        setPlayerWon={setPlayerWon}
      />
    </div>
  );
};
export default Game;
