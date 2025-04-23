function sortedSquares(nums: number[]): number[] {

  const squaredNumbers = nums.map((num) => num * num);
  const sortedNumbers = squaredNumbers.sort((a, b) => a - b);

  return sortedNumbers;
    
};