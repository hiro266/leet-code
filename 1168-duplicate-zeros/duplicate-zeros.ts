/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  const newArr: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
    if (arr[i] === 0) {
      if (i !== arr.length -1) {
        newArr.push(0);
        arr.pop();
      }
    }
  }

  arr.splice(0, arr.length, ...newArr)
};