function thirdMax(nums: number[]): number {
  const uniqueNums = new Set(nums);
  if (uniqueNums.size < 3) return Math.max(...nums);

  let output = 0;
  let count = 1;

  nums.sort((a, b) => b - a);

  for (let i = 1; count < 3; i++) {
    if (nums[i - 1] > nums[i]) {
      output = nums[i];
      count++;
    }
  }

  return output;
    
};