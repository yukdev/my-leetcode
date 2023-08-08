/**
 * In an infinite chess board with coordinates from -infinity to +infinity,
 * you have a knight at square [0, 0].
 * A knight has 8 possible moves it can make, as illustrated below.
 * Each move is two squares in a cardinal direction,
 * then one square in an orthogonal direction.
 *
 *
 * Return the minimum number of steps needed to move the knight to the square [x, y].
 * It is guaranteed the answer exists.
 *
 * Example 1:
 * Input: x = 2, y = 1
 * Output: 1
 * Explanation: [0, 0] → [2, 1]
 *
 * Example 2:
 * Input: x = 5, y = 5
 * Output: 4
 * Explanation: [0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
 */
const minKnightMoves = (x, y) => {
  const visited = new Set();
  visited.add('0,0');

  const queue = [[0, 0, 0]];
  while (queue.length > 0) {
    const [row, col, step] = queue.shift();
    if (row === x && col === y) {
      return step;
    }

    const moves = getKnightMoves(row, col);
    for (let move of moves) {
      const [nextRow, nextCol] = move;
      const moveKey = `${nextRow},${nextCol}`;
      if (!visited.has(moveKey)) {
        visited.add(moveKey);
        queue.push([nextRow, nextCol, step + 1]);
      }
    }
  }
};

const getKnightMoves = (x, y) => {
  return [
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x + 1, y + 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x - 1, y - 2],
  ];
};
