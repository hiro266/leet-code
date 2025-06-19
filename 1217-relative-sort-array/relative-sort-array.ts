function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const includeNums = arr1.filter((num) => arr2.includes(num));
  const excludedNums = arr1
    .filter((num) => !arr2.includes(num))
    .sort((a, b) => a - b);

  const sortedNums = arr2.flatMap((num2) =>
    includeNums.filter((num) => num === num2)
  );

  return sortedNums.concat(excludedNums);
};