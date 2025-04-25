function removeDuplicates(nums: number[]): number {

  const deDuplicatedNums = [...new Set(nums)];
  nums.splice(0, nums.length);

  for (let i = 0; i < deDuplicatedNums.length; i++) {
    nums[i] = deDuplicatedNums[i];
  }

  return nums.length;
};