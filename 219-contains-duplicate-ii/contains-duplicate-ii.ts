const main = (nums: number[], k: number): boolean => {
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const slice = nums.slice(i + 1, i + 1 + k);
    console.log(slice);
    if (slice.includes(num)) return true;
  }
  return false;
};

main([1, 2, 3, 1], 3);
main([1, 0, 1, 1], 1);
main([1, 2, 3, 1, 2, 3], 2);
