import {useState} from 'react';
import Box from './Box';
import Button from './UI/Button';

const Board = () => {
  const [boxState, setBoxState] = useState(Array(9).fill(null));
  const [playerMove, setPlayerMove] = useState(true);
  const [computerMove, setComputerMove] = useState(false);

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

  // check empty boxes indexes
  const checkEmptyBoxIndex = () => {
    const emptyBox = [];
    for (let i = 0; i <= boxState.length; i++) {
      if (boxState[i] === null) {
        emptyBox.push(i);
      }
    }
    return emptyBox;
  };
  const emptyBoxIndexs = checkEmptyBoxIndex();
  // console.log(emptyBoxIndex);

  if (computerMove && !isWinner) {
    setTimeout(() => {
      computerTurn();
    }, 200);
  }

  const computerTurn = () => {
    // get number from the remaining boxes
    const randomItem =
      emptyBoxIndexs[Math.floor(Math.random() * emptyBoxIndexs.length)];

    const oldState = [...boxState];
    oldState[randomItem] = 'O';
    setBoxState(oldState);

    setComputerMove(false);
    setPlayerMove(true);

    // const computerMoveIndex = Math.floor(Math.random() * 9);
    // console.log(computerMoveIndex);

    // // for (let i = 0; i < emptyBoxIndex.length; i++) {
    //   // if (emptyBoxIndex[i] != computerMoveIndex) {
    //   if (emptyBoxIndex.includes(computerMoveIndex)) {
    //     const oldState = [...boxState];
    //     oldState[computerMoveIndex] = 'O';
    //     setBoxState(oldState);
    //   } else {
    //     computerTurn();
    //   }
    // }
  };

  const boxClickHandler = index => {
    if (isWinner && !check) {
      return;
    }

    if (!isWinner && check) {
      const oldState = [...boxState];
      oldState[index] = 'X';
      setBoxState(oldState);

      setPlayerMove(false);
      setComputerMove(true);
    }

    // if (boxState[index] !== null) {
    //   const computerMove = Math.floor(Math.random() * 9 + 1);
    //   for (let i = 1; i <= boxState.length; i++) {
    //     if ((boxState[i] === computerMove) !== null) {
    //       setComputerMove(true);
    //     }
    //   }
    // }

    // const oldState = [...boxState];
    // oldState[index] = isXTurn ? 'X' : 'O';
    // setBoxState(oldState);
    // setPlayerMove(!isXTurn);
  };

  // reset game
  const playAgainButtonHandler = () => {
    setBoxState(Array(9).fill(null));
    setPlayerMove(false);
  };

  return (
    <>
      {<h2>{playerMove ? 'Player (X)' : 'Computer (O)'} move</h2>}
      <div className="bg-blue-500 w-60 h-60 flex items-center justify-center text-white font-bold text-3xl">
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
      </div>
      {isWinner && (
        <>
          {/* <h5>{!isXTurn ? 'X' : 'O'} Wins</h5> */}
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
