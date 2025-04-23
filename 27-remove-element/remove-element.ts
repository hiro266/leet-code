function removeElement(nums: number[], val: number): number {
  let removeAmount = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(nums.indexOf(val),1, undefined)
      removeAmount++
    } else {
      nums[i - removeAmount] = nums[i]
    }
  }
  
  return nums.length - removeAmount
};