/**
 * Given two strings ransomNote and magazine,
 * return true if ransomNote can be constructed
 * by using the letters from magazine and false otherwise.
 *
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Example 1:
 *
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 *
 * Example 2:
 *
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 *
 * Example 3:
 *
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 */
function canConstruct(ransomNote, magazine) {
  const magazineFrequencyCounter = createFrequencyCounter(magazine);

  for (let char of ransomNote) {
    if (!magazineFrequencyCounter[char]) {
      return false;
    }
    magazineFrequencyCounter[char] -= 1;
    if (magazineFrequencyCounter[char] < 0) {
      return false;
    }
  }

  return true;
}

function createFrequencyCounter(string) {
  const counter = {};

  for (let char of string) {
    counter[char] = counter[char] ? counter[char] + 1 : 1;
  }

  return counter;
}

//test
