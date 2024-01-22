import Squares from "./Squares";
const Board = ({ setPlayerWon, setCurrentPlayer, currentPlayer }) => {
  return (
    <>
      <div className='Board'>
        <Squares
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          setPlayerWon={setPlayerWon}
        />
      </div>
    </>
  );
};

export default Board;
