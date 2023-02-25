/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Example:
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].
 */

/**
 * o(n^2) solution using nested loop
 */
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[i + j] === target) {
        return [i, i + j];
      }
    }
  }
}

/**
 * o(n) solution using hashmap
 */
function twoSum(nums, target) {
  const cache = new Map();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (cache.has(diff)) return [cache.get(diff), i];
    cache.set(nums[i], i);
  }
}
