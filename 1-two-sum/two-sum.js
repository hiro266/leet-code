/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = 1;

  while (leftPointer < nums.length) {
    if (nums[leftPointer] + nums[rightPointer] === target) {
      console.log([leftPointer, rightPointer]);
      return [leftPointer, rightPointer];
    }

    if (rightPointer === nums.length) {
      leftPointer++;
      rightPointer = leftPointer + 1;
    } else {
      rightPointer++;
    }
  }

  return [0, 0];
};