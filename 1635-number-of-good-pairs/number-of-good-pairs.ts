function numIdenticalPairs(nums: number[]): number {
  let result = 0;
  let left = 0;

  while (left < nums.length) {
    for (let right = left + 1; right < nums.length; right++) {
      if (nums[left] === nums[right]) result++;
    }
    left++;
  }
  return result;
};