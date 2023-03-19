/**
 * Given a string s,
 * find the length of the longest substring without repeating characters.
 *
 * Example 1:
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring,
 * "pwke" is a subsequence and not a substring.
 */
function lengthOfLongestSubstring(string) {
  const chars = new Set();
  let [longest, left] = [0, 0];

  for (let right = 0; right < string.length; right++) {
    while (chars.has(string[right])) {
      chars.delete(string[left]);
      left += 1;
    }
    chars.add(string[right]);
    longest = Math.max(longest, right - left + 1);
  }

  return longest;
}

// alternative
// function lengthOfLongestSubstring(string) {
//   const chars = new Set();
//   let [longest , left, right] = [0, 0, 0];

//   while (right < string.length) {
//     if (chars.has(string[right])) {
//       chars.delete(s[left]);
//       left += 1;
//     } else {
//       chars.add(string[right]);
//       right += 1;
//       longest = Math.max(longest, right - left);
//     }
//   }

//   return longest;
// }
