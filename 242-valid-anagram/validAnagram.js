/**
 * Given two strings s and t,
 * return true if t is an anagram of s, and false otherwise.
 *
 * An Anagram is a word or phrase formed by
 * rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 *
 * Example 1:
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "rat", t = "car"
 * Output: false
 */
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freqCounter = {};

  for (let char of str1) {
    freqCounter[char] = freqCounter[char] ? freqCounter[char] + 1 : 1;
  }

  for (let char of str2) {
    if (!freqCounter[char]) return false;

    freqCounter[char]--;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("ab", "a")); // false
