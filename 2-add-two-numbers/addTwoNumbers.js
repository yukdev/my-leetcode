/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 */
const addTwoNumbers = (l1, l2) => {
  const dummyHead = new ListNode(null);
  let tail = dummyHead;

  let current1 = l1;
  let current2 = l2;
  let carry = 0;

  while (current1 || current2 || carry) {
    const val1 = current1 ? current1.val : 0;
    const val2 = current2 ? current2.val : 0;
    const sum = val1 + val2 + carry;
    carry = sum >= 10 ? 1 : 0;

    tail.next = new ListNode(sum % 10);
    tail = tail.next;

    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }

  return dummyHead.next;
};
