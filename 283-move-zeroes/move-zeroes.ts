/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {

  let zeroCount = 0;
  let writePointer = 0;

  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] === 0) {
      zeroCount++;
    } else {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }

  const Addelements = [...Array(zeroCount)].map(() => 0);
  nums.splice(nums.length - zeroCount, zeroCount, ...Addelements);
    
};