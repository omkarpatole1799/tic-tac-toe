import {useState} from 'react';
import Box from './Box';
import Button from './UI/Button';
import {Link} from 'react-router-dom';

const Board = () => {
  const [boxState, setBoxState] = useState(Array(9).fill(null));
  const [isXPlaying, setIsXPlaying] = useState(true);

  const checkWinner = () => {
    const winConditions = [
      // cols
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],

      // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],

      // diagonals
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winConditions) {
      if (
        boxState[a] !== null &&
        boxState[a] === boxState[b] &&
        boxState[a] === boxState[c]
      ) {
        return true;
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  // check if all boxes are marked and if so end the game
  const checkAllBoxFilled = () => {
    let isNull = false;
    for (let i = 0; i < boxState.length; i++) {
      if (boxState[i] === null) {
        isNull = true;
      }
    }
    return isNull;
  };

  const check = checkAllBoxFilled();

  const playerTurn = index => {
    if (isWinner && !check && boxState[index] !== null) {
      return;
    }

    if (!isWinner && check && boxState[index] === null) {
      const oldState = [...boxState];
      oldState[index] = isXPlaying ? 'X' : 'O';
      setBoxState(oldState);
      setIsXPlaying(!isXPlaying);
    }
  };

  // reset game
  const playAgainButtonHandler = () => {
    setBoxState(Array(9).fill(null));
    setIsXPlaying(true);
  };

  return (
    <>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <h3>Game Mode: Player vs Player</h3>

      {!isWinner && <h2>{isXPlaying ? 'Player (X)' : 'Player (O)'} move</h2>}
      <div className="bg-blue-500 w-60 h-60 flex items-center justify-center text-white font-bold text-3xl">
        <>
          <div className="">
            <Box
              value={boxState[0]}
              onClick={playerTurn.bind(null, 0)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
            <Box
              value={boxState[1]}
              onClick={playerTurn.bind(null, 1)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
            <Box
              value={boxState[2]}
              onClick={playerTurn.bind(null, 2)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
          </div>
          <div className="">
            <Box
              value={boxState[3]}
              onClick={playerTurn.bind(null, 3)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
            <Box
              value={boxState[4]}
              onClick={playerTurn.bind(null, 4)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
            <Box
              value={boxState[5]}
              onClick={playerTurn.bind(null, 5)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
          </div>
          <div className="">
            <Box
              value={boxState[6]}
              onClick={playerTurn.bind(null, 6)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
            <Box
              value={boxState[7]}
              onClick={playerTurn.bind(null, 7)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
            <Box
              value={boxState[8]}
              onClick={playerTurn.bind(null, 8)}
              className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
            />
          </div>
        </>
      </div>
      {isWinner && (
        <>
          <h5>{!isXPlaying ? 'X' : 'O'} Wins</h5>
          <div>
            <h4>Game over</h4>
            <Button onClick={playAgainButtonHandler}>Play again!</Button>
          </div>
        </>
      )}
      {!isWinner && !check && (
        <>
          <h4>No one win </h4>
          <Button onClick={playAgainButtonHandler}>Play Again</Button>
        </>
      )}
    </>
  );
};
export default Board;
