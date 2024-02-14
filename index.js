function ticTac(moves) {
  const board = Array.from(Array(3), () => Array(3).fill(" "));
  const seenMoves = new Set();

  for (let i = 0; i < moves.length; i++) {
    const player = i % 2 === 0 ? "A Wins" : "B Wins";
    const [row, col] = moves[i];

    // Validación de movimiento repetido
    const moveString = `${row}-${col}`;
    if (seenMoves.has(moveString)) {
      throw new Error(`Error: Movimiento repetido en [${row}, ${col}].`);
    }
    seenMoves.add(moveString);

    board[row][col] = player;

    // Verificar ganador
    if (checkWinner(board, row, col, player)) {
      return player;
    }
  }

  // Verificar empate o pendiente
  if (moves.length === 9) {
    return "Empate";
  } else {
    return "Pendiente";
  }
}

function checkWinner(board, row, col, player) {
  // Verificar fila
  if (board[row].every((cell) => cell === player)) {
    return true;
  }

  // Verificar columna
  if (board.every((row) => row[col] === player)) {
    return true;
  }

  // Verificar diagonal
  if (
    (row === col || row + col === 2) &&
    ((board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
      (board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player))
  ) {
    return true;
  }

  return false;
}

// Movimientos
const moves = [
  [0, 0],
  [2, 0],
  [1, 1],
  [2, 1],
  [2, 2],
];

const moves2 = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
];

console.log(ticTac(moves2));
