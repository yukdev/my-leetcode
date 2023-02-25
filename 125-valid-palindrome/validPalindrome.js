/**
 * A phrase is a palindrome if,
 * after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters,
 * it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 *
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 */
function isPalindrome(string) {
  const convertedStr = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = convertedStr.length - 1;

  while (left < right) {
    if (convertedStr[left] !== convertedStr[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); //false
