/**
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 *
 * The distance between two adjacent cells is 1.
 *
 * Example 1:
 *
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: [[0,0,0],[0,1,0],[0,0,0]]
 *
 * Example 2:
 *
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
 * Output: [[0,0,0],[0,1,0],[1,2,1]]
 */
function updateMatrix(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const result = [...mat];
  const queue = [];

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (mat[y][x] === 0) {
        queue.push([y, x]);
      } else {
        result[y][x] = '?';
      }
    }
  }

  // up, down, left, right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let direction of directions) {
      const newY = y + direction[0];
      const newX = x + direction[1];

      if (
        newY >= 0 &&
        newY < rows &&
        newX >= 0 &&
        newX < cols &&
        result[newY][newX] === '?'
      ) {
        result[newY][newX] = mat[y][x] + 1;
        queue.push([newY, newX]);
      }
    }
  }

  return result;
}
