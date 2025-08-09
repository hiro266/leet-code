function arithmeticTriplets(nums: number[], diff: number): number {
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] - nums[j] === diff && nums[j] - nums[i] === diff) {
          count++
        }
      }
    }
  }

  return count

};