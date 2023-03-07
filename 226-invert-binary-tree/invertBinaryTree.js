/**
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 * Example 1:
 *
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 *
 * Example 2:
 *
 * Input: root = [2,1,3]
 * Output: [2,3,1]
 *
 * Example 3:
 *
 * Input: root = []
 * Output: []
 */
function invertTree(root) {
  if (!root) {
    return root;
  }

  const tempLeft = root.left;

  root.left = root.right;
  root.right = tempLeft;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

console.log(invertTree([4, 2, 7, 1, 3, 6, 9])); // [4,7,2,9,6,3,1]
console.log(invertTree([2, 1, 3])); // [2,3,1]
console.log(invertTree([])); // []
