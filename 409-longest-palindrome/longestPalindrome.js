/**
 * Given a string s which consists of lowercase or uppercase letters,
 * return the length of the longest palindrome that can be built with those letters.
 *
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 *
 * Example 1:
 *
 * Input: s = "abccccdd"
 * Output: 7
 * Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
 *
 * Example 2:
 *
 * Input: s = "a"
 * Output: 1
 * Explanation: The longest palindrome that can be built is "a", whose length is 1.
 */
function longestPalindrome(string) {
  const frequencyCounter = createFrequencyCounter(string);

  let length = 0;
  let hadOddFreq = false;

  for (let char in frequencyCounter) {
    value = frequencyCounter[char];

    if (value % 2 === 0) {
      length += value;
    } else {
      length += value - 1;
      hadOddFreq = true;
    }
  }

  return hadOddFreq ? length + 1 : length;
}

function createFrequencyCounter(string) {
  const counter = {};

  for (let char of string) {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  }

  return counter;
}

