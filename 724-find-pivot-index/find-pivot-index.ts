const isZero = (arr: number[]) => {
  return arr.length === 0;
};

function pivotIndex(nums: number[]): number {

  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < nums.length; i++) {
    leftArr = nums.slice(0, i);
    rightArr = nums.slice(i + 1, nums.length);

    const sumLeft = isZero(leftArr)
      ? 0
      : leftArr.reduce((acc, current) => acc + current);
    const sumRight = isZero(rightArr)
      ? 0
      : rightArr.reduce((acc, current) => acc + current);

    if (sumLeft === sumRight) return i;
  }

  return -1;
};