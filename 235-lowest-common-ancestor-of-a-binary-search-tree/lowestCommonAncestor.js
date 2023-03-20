/**
 * Given a binary search tree (BST),
 * find the lowest common ancestor (LCA) node of two given nodes in the BST.
 *
 * According to the definition of LCA on Wikipedia:
 * “The lowest common ancestor is defined between two nodes p and q as
 * the lowest node in T that has both p and q as descendants
 * (where we allow a node to be a descendant of itself).”
 *
 * Example 1:
 *
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 */
function lowestCommonAncestor(root, q, p) {
  let currentNode = root;

  while (currentNode) {
    // both q and p are greater, traverse right
    if (p.val > currentNode.val && q.val > currentNode.val) {
      currentNode = currentNode.right;
      // both q and p are smaller, traverse left
    } else if (p.val < currentNode.val && q.val < currentNode.val) {
      currentNode = currentNode.left;
      // else you found the lca
    } else {
      return currentNode;
    }
  }
}
