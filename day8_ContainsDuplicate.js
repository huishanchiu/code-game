/**
 * Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

 */

function hasDuplicate(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
}
// function hasDuplicate(nums) {
//   let res = 0;
//   const set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       res++;
//     } else {
//       set.add(nums[i]);
//     }
//   }
//   if (res > 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(hasDuplicate([2, 2, 1, 1, 3, 1, 2, 3, 1, 4]));
