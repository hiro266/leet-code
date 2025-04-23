/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const newArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(0)
      newArr.push(0)
    } else {
      newArr.push(arr[i])
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i]
  }
};