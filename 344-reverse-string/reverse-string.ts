/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let rightPointer = s.length - 1;

  for (let leftPointer = 0; leftPointer <= rightPointer; leftPointer++) {
    const leftTmp = s[leftPointer];
    s[leftPointer] = s[rightPointer];
    s[rightPointer] = leftTmp;
    rightPointer--;
  }
    
};