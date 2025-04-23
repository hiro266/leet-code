function removeElement(nums: number[], val: number): number {
  const filteredNums = nums.filter((num) => num !== val);
  nums.splice(0, nums.length);

  for (let i = 0; i < filteredNums.length; i++) {
    nums[i] = filteredNums[i];
  }
  return filteredNums.length;
};