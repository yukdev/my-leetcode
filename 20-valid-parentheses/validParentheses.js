/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 2:
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 *
 * Input: s = "(]"
 * Output: false
 */
function isValid(string) {
  const closingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let bracket of string) {
    if (closingBrackets[bracket]) {
      if (stack[stack.length - 1] !== closingBrackets[bracket]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(bracket);
    }
  }

  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
