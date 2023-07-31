/**
 * Given the head of a singly linked list,
 * return true if it is a palindrome or false otherwise.
 *
 * Example 1:
 * Input: head = [1,2,2,1]
 * Output: true
 *
 * Example 2:
 * Input: head = [1,2]
 * Output: false
 */
const isPalindrome = (head) => {
  if (!head || !head.next) {
    return true;
  }

  // find middle of linked list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let reversedSecondHalf = reverseLinkedList(slow);

  while (reversedSecondHalf) {
    if (head.val !== reversedSecondHalf.val) {
      return false;
    }
    head = head.next;
    reversedSecondHalf = reversedSecondHalf.next;
  }

  return true;
};

const reverseLinkedList = (head) => {
  let prev = null;
  while (head) {
    const next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
};
