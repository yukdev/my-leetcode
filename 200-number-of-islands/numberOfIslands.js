/**
 * Given an m x n 2D binary grid grid which represents
 * a map of '1's (land) and '0's (water),
 * return the number of islands.
 *
 * An island is surrounded by water and
 * is formed by connecting adjacent lands horizontally or vertically.
 * You may assume all four edges of the grid are all surrounded by water.
 *
 *
 * Example 1:
 *
 * Input: grid = [
 *  ["1","1","1","1","0"],
 *  ["1","1","0","1","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","0","0","0"]
 * ]
 *
 * Output: 1
 *
 * Example 2:
 *
 * Input: grid = [
 *  ["1","1","0","0","0"],
 *  ["1","1","0","0","0"],
 *  ["0","0","1","0","0"],
 *  ["0","0","0","1","1"]
 * ]
 *
 * Output: 3
 */
const numIslands = (grid) => {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === '1') {
        count += 1;
        _dfs(grid, row, col);
      }
    }
  }

  return count;
};

const _dfs = (grid, row, col) => {
  const rowInbound = row >= 0 && row < grid.length;
  const colInbound = col >= 0 && col < grid[0].length;

  if (!rowInbound || !colInbound) return;
  if (grid[row][col] === '0') return;

  grid[row][col] = '0';

  _dfs(grid, row + 1, col);
  _dfs(grid, row - 1, col);
  _dfs(grid, row, col + 1);
  _dfs(grid, row, col - 1);
};
