/**
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 *
 * You are also given three integers sr, sc, and color.
 * You should perform a flood fill on the image starting from the pixel image[sr][sc].
 *
 * To perform a flood fill, consider the starting pixel,
 * plus any pixels connected 4-directionally to the starting pixel
 * of the same color as the starting pixel,
 * plus any pixels connected 4-directionally to
 * those pixels (also with the same color), and so on.
 * Replace the color of all of the aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 *
 * Example 1:
 *
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 */
function floodFill(image, sr, sc, color) {
  if (image[sr][sc] === color || image.length === 0) return image;

  const [rBoundary, cBoundary] = [image.length - 1, image[0].length - 1];

  const originalColor = image[sr][sc];

  _dfs(originalColor, color, sr, sc, image);

  return image;

  function _dfs(originalColor, targetColor, sr, sc, image) {
    if (
      sr > rBoundary ||
      sr < 0 ||
      sc > cBoundary ||
      sc < 0 ||
      image[sr][sc] !== originalColor ||
      image[sr][sc] === targetColor
    ) {
      return;
    }

    image[sr][sc] = targetColor;

    _dfs(originalColor, targetColor, sr, sc + 1, image);
    _dfs(originalColor, targetColor, sr, sc - 1, image);
    _dfs(originalColor, targetColor, sr - 1, sc, image);
    _dfs(originalColor, targetColor, sr + 1, sc, image);
  }
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
