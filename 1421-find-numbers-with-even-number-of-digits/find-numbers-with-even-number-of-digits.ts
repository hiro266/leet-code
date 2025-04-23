function findNumbers(nums: number[]): number {
  let evenDigitCount = 0;

  const isEvenDigit = (num: number): boolean => {
    let currentValue = num;
    let count = 0;

    while (currentValue > 0) {
      currentValue = Math.trunc(currentValue / 10);
      count++;
    }

    if (count % 2 === 0) return true;
    return false;
  };

  for (let i = 0; i < nums.length; i++) {
    if (isEvenDigit(nums[i])) evenDigitCount++;
  }
  
  return evenDigitCount;
};