function removeElement(nums: number[], val: number): number {
  const expectedNums = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) expectedNums.push(nums[i]);
  }

  nums.splice(0);

  for (let j = 0; j < expectedNums.length; j++) {
    nums[j] = expectedNums[j];
  }

  return expectedNums.length;
};