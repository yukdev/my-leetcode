/**
 * You are given an array of non-overlapping intervals intervals
 * where intervals[i] = [starti, endi] represent the start and the end
 * of the ith interval and intervals is sorted in ascending order by starti.
 * You are also given an interval newInterval = [start, end]
 * that represents the start and end of another interval.
 *
 * Insert newInterval into intervals such that intervals is still sorted
 * in ascending order by starti and intervals still does not have any
 * overlapping intervals (merge overlapping intervals if necessary).
 *
 * Return intervals after the insertion.
 *
 * Example 1:
 *
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 *
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */
function insert(intervals, newInterval) {
  const result = [];

  for (let interval of intervals) {
    // current interval before new interval
    if (interval[1] < newInterval[0]) {
      result.push(interval);
      // current interval after new interval
    } else if (interval[0] > newInterval[1]) {
      result.push(newInterval);
      newInterval = interval;
    } else {
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
    }
  }
  return [...result, newInterval];
}

// 2-pointer
// function insert(intervals, newInterval) {
//   let [newStart, newEnd] = newInterval;
//   const [left, right] = [[], []];

//   for (let interval of intervals) {
//     const [start, end] = interval;

//     if (end < newStart) {
//       left.push(interval);
//     } else if (start > newEnd) {
//       right.push(interval);
//     } else {
//       newStart = Math.min(start, newStart);
//       newEnd = Math.max(end, newEnd);
//     }
//   }

//   return [...left, [newStart, newEnd], ...right];
// }
