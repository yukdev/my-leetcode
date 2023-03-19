/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps.
 * In how many distinct ways can you climb to the top?
 *
 * Example 1:
 *
 * Input: n = 2
 * Output: 2
 * Explanation: There are two ways to climb to the top.
 * 1. 1 step + 1 step
 * 2. 2 steps
 *
 * Example 2:
 *
 * Input: n = 3
 * Output: 3
 * Explanation: There are three ways to climb to the top.
 * 1. 1 step + 1 step + 1 step
 * 2. 1 step + 2 steps
 * 3. 2 steps + 1 step
 */
// recursive solution - not making time check - revisit later
function climbStairs(n) {
  // initialize tabulation
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  //
  for (let i = 3; i <= n; i++) {
    const [prev, prevPrev] = [i - 1, i - 2];
    dp[i] = dp[prev] + dp[prevPrev];
  }

  return dp[n];
}

console.log(climbStairs(5));
