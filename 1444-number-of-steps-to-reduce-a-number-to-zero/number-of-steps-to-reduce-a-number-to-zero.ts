function numberOfSteps(num: number): number {
  let steps = 0;
  let currentValue = num;

  while (currentValue > 0) {
    steps++;
    const divisibleBy2 = currentValue % 2 === 0;

    divisibleBy2 ? (currentValue /= 2) : currentValue--;
  }
  return steps;

};