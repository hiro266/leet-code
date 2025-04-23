/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const joinedNumbers = nums1.slice(0, m).concat(nums2.slice(0, n));
  const sortedNumbers = joinedNumbers.sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length; i++) {
    nums1[i] = sortedNumbers[i]
  }
    
};