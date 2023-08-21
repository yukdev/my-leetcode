/**
 * You are given an n x n binary matrix grid where
 * 1 represents land and 0 represents water.
 *
 * An island is a 4-directionally connected group of 1's not connected
 * to any other 1's. There are exactly two islands in grid.
 *
 * You may change 0's to 1's to connect the two islands to form one island.
 *
 * Return the smallest number of 0's you must flip to connect the two islands.
 *
 * Example 1:
 *
 * Input: grid = [[0,1],[1,0]]
 * Output: 1
 *
 * Example 2:
 * Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
 * Output: 2
 *
 * Example 3:
 * Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
 * Output: 1
 */
const shortestBridge = (grid) => {
  let island;
  let found = false;

  for (let row = 0; row < grid.length; row++) {
    if (found) break;
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        island = traverseIsland(grid, row, col, new Set());
        found = true;
        break;
      }
    }
  }

  const visited = new Set(island);
  const queue = [];
  for (let position of island) {
    const [row, col] = position.split(',').map((n) => Number(n));
    queue.push([row, col, 0]);
  }

  while (queue.length > 0) {
    const [row, col, distance] = queue.shift();

    const position = row + ',' + col;
    if (grid[row][col] === 1 && !island.has(position)) {
      return distance - 1;
    }

    const deltas = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      const neighborPosition = neighborRow + ',' + neighborCol;

      if (
        inBounds(grid, neighborRow, neighborCol) &&
        !visited.has(neighborPosition)
      ) {
        visited.add(neighborPosition);
        queue.push([neighborRow, neighborCol, distance + 1]);
      }
    }
  }
};

const inBounds = (grid, row, col) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;

  return rowInBounds && colInBounds;
};

const traverseIsland = (grid, row, col, visited) => {
  if (!inBounds(grid, row, col) || grid[row][col] === 0) return visited;

  const position = row + ',' + col;
  if (visited.has(position)) return visited;
  visited.add(position);

  traverseIsland(grid, row - 1, col, visited);
  traverseIsland(grid, row + 1, col, visited);
  traverseIsland(grid, row, col - 1, visited);
  traverseIsland(grid, row, col + 1, visited);

  return visited;
};
