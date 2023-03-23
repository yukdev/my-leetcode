/**
 * Given the head of a singly linked list.
 * Reverse the list, and return the reversed list.
 *
 * Example 1:
 *
 * Input: head = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: [2,1]
 *
 * Example 3:
 *
 * Input: head = []
 * Output: []
 */
// iterative solution
function reverseList(head) {
  let [current, previous] = [head, null];

  while (current) {
    const tempNext = current.next;
    current.next = previous;
    previous = current;
    current = tempNext;
  }

  return previous;
}

// recursive solution
function reverseListRecursive(head) {
  if (!head) {
    return null;
  }

  let newHead = head;
  if (head.next) {
    newHead = reverseListRecursive(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
}
