function validMountainArray(arr: number[]): boolean {
  const max = Math.max(...arr);
  const maxIdx = arr.indexOf(max);

  // 最大値が先頭 or 後尾の場合、山配列にならないためfalse
  if (maxIdx === 0 || maxIdx === arr.length - 1) return false;

  // 最大値を起点に前方の値を検証
  for (let i = maxIdx; i > 0; i--) {
    if (arr[i - 1] >= arr[i]) return false;
  }

  // 最大値を起点に後方の値を検証
  for (let i = maxIdx; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) return false;
  }

  return true;
};