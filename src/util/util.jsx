export function calculateWinner(tiles) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (tiles[a] && tiles[a] === tiles[b] && tiles[a] === tiles[c]) {
      return tiles[a];
    }
  }
  return null;
}

export function calculateTie(tiles) {
  if (genericWinnerCalculator(tiles) !== null) {
    return false;
  }
  for (let i = 0; i < tiles.length; i++) {
    if (!tiles[i]) {
      return false;
    }
  }
  return true;
}

// works with tic-tac-toe game of any size
export function genericWinnerCalculator(tiles) {
  const boardSize = tiles.length;
  const boardDim = Math.round(Math.sqrt(boardSize));

  let winner;
  let i = 0;
  while (i < boardDim) {
    if (i === 0) {
      // first element in first row: rightward-diagonal
      winner = checkWinner(tiles, i, boardDim + 1, boardSize);
      if (winner) {
        return winner;
      }
    } else if (i === boardDim - 1) {
      //last element in first row: leftward-diagonal
      winner = checkWinner(tiles, i, boardDim - 1, boardSize - boardDim + 1);
      if (winner) {
        return winner;
      }
    }

    //bottomward-vertical
    winner = checkWinner(tiles, i, boardDim, boardSize - boardDim + i + 1);
    if (winner) {
      return winner;
    }
    ++i;
  }
  //rightward-horizontal
  i = 0;
  while (i <= boardSize - boardDim) {
    winner = checkWinner(tiles, i, 1, i + boardDim);
    if (winner) {
      return winner;
    }
    i += boardDim;
  }
  return null;
}

function checkWinner(tiles, start, step, end) {
  const mark = tiles[start];
  if (mark === null || mark === "") {
    return null;
  }
  let j = start + step;
  while (j < end) {
    if (tiles[j] !== mark) {
      break;
    }
    j += step;
  }
  if (j >= end) {
    return mark;
  }
  return null;
}
