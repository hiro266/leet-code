function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    const filteredArr = nums.filter((num) => num === target);
    if (filteredArr.length === 1) return filteredArr[0];
  }
  return 0
};