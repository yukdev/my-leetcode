/**
 * Given the head of a singly linked list,
 * return the middle node of the linked list.
 *
 * If there are two middle nodes, return the second middle node.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 *
 * Example 2:
 *
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 */
// hashmap
function middleNode(head) {
  const map = {};
  let idx = 0;

  while (head) {
    idx += 1;
    map[idx] = head;
    head = head.next;
  }

  return map[Math.floor(idx / 2 + 1)];
}

// slow fast pointer - better space complexity
function middleNode(head) {
  let [slow, fast] = [head, head];

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
