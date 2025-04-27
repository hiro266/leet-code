function replaceElements(arr: number[]): number[] {
  if (arr.length < 0) return arr.splice(0, 1, -1);

  let currentIdx = 0;

  for (let i = 0; i < arr.length; i = currentIdx) {
    const slice = arr.slice(i);
    const max = Math.max(...slice);
    const relativeIdx = slice.indexOf(max); // slice 内での位置
    const maxIdx = i + relativeIdx;
    const replacementCount = maxIdx - i; // 置換する数
    const maxNums = [...Array(replacementCount).keys()].map(() => max); // maxの値を置換数生成

    arr.splice(i, replacementCount, ...maxNums);
    currentIdx = maxIdx + 1;
  }

  arr.splice(0, 1);
  arr.push(-1);
  return arr;
};