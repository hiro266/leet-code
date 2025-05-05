function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const tmp = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      if (tmp + numbers[j] === target) {
        numbers.splice(0);
        numbers[0] = i + 1;
        numbers[1] = j + 1;
      }
    }
  }

  return numbers;
};