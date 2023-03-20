/**
 * Given a binary tree, determine if it is height-balanced.
 *
 * Example 1:
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 *
 * Example 2:
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 *
 * Example 3:
 * Input: root = []
 * Output: true
 */
function isBalanced(root) {
  function _dfs(root) {
    // reached node with no children
    if (!root) {
      return [true, 0];
    }
    const [left, right] = [_dfs(root.left), _dfs(root.right)];
    const isBalanced =
      left[0] === true &&
      right[0] === true &&
      Math.abs(left[1] - right[1]) <= 1;
    return [isBalanced, 1 + Math.max(left[1], right[1])];
  }

  return _dfs(root)[0];
}
