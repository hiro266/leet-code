function arrayRankTransform(arr: number[]): number[] {
  const arrCopy = [...arr];
  const lankMap = new Map();

  let currentLank = 1;
  for (const num of arrCopy.sort((a, b) => a - b)) {
    if (!lankMap.has(num)) {
      lankMap.set(num, currentLank);
      currentLank++;
    }
  }
  const result = arr.map((num) => lankMap.get(num));
  return result;

};