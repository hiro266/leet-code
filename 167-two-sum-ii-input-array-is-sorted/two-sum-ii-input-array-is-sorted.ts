function twoSum(numbers: number[], target: number): number[] {
  let leftPointer = 0;
  let rightPointer = numbers.length - 1;

  while (leftPointer <= rightPointer) {
    const leftNum = numbers[leftPointer];
    const rightNum = numbers[rightPointer];
    const total = leftNum + rightNum;

    if (total > target) {
      rightPointer--;
    } else if (total < target) {
      leftPointer++;
    } else {
      numbers.splice(0);
      numbers[0] = leftPointer + 1;
      numbers[1] = rightPointer + 1;
      return numbers;
    }
  }
  return numbers;
};