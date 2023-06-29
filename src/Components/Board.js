import {useState} from 'react';
import Box from './Box';
import Button from './UI/Button';

const Board = () => {
  const [boxState, setBoxState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
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
  console.log(!check);

  const boxClickHandler = index => {
    if (boxState[index] !== null) {
      return;
    }
    const oldState = [...boxState];
    oldState[index] = isXTurn ? 'X' : 'O';
    setBoxState(oldState);
    setIsXTurn(!isXTurn);
  };

  // reset game
  const playAgainButtonHandler = () => {
    setBoxState(Array(9).fill(null));
    setIsXTurn(true);
  };

  return (
    <>
      {<h2>Player {isXTurn ? 'X' : 'O'} turn</h2>}
      <div className="bg-blue-500 w-60 h-60 flex items-center justify-center text-white font-bold text-3xl">
        {!isWinner && (
          <>
            <div className="">
              <Box
                value={boxState[0]}
                onClick={boxClickHandler.bind(null, 0)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
              <Box
                value={boxState[1]}
                onClick={boxClickHandler.bind(null, 1)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
              <Box
                value={boxState[2]}
                onClick={boxClickHandler.bind(null, 2)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
            </div>
            <div className="">
              <Box
                value={boxState[3]}
                onClick={boxClickHandler.bind(null, 3)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
              <Box
                value={boxState[4]}
                onClick={boxClickHandler.bind(null, 4)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
              <Box
                value={boxState[5]}
                onClick={boxClickHandler.bind(null, 5)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
            </div>
            <div className="">
              <Box
                value={boxState[6]}
                onClick={boxClickHandler.bind(null, 6)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
              <Box
                value={boxState[7]}
                onClick={boxClickHandler.bind(null, 7)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
              <Box
                value={boxState[8]}
                onClick={boxClickHandler.bind(null, 8)}
                className="bg-blue-400 w-20 h-20 flex items-center justify-center border-2"
              />
            </div>
          </>
        )}
      </div>
      {isWinner && (
        <>
          <h5>{!isXTurn ? 'X' : 'O'} Wins</h5>
          <div>
            <h4>Game over</h4>
            <Button onClick={playAgainButtonHandler}>Play again!</Button>
          </div>
        </>
      )}

      {/* if all boxex filled and no one is winner then reset the game */}

      {!check && (
        <>
          <h4>No one win </h4>
          <Button onClick={playAgainButtonHandler}>Play Again</Button>
        </>
      )}
    </>
  );
};
export default Board;
