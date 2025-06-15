function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const aliceTotalCandy = aliceSizes.reduce((acc, current) => acc + current);
  const bobTotalCandy = bobSizes.reduce((acc, current) => acc + current);
  const expectDiff =
    aliceTotalCandy > bobTotalCandy
      ? (aliceTotalCandy - bobTotalCandy) / 2
      : (bobTotalCandy - aliceTotalCandy) / 2;

  if (aliceTotalCandy > bobTotalCandy) {
    for (let i = 0; i < aliceSizes.length; i++) {
      for (let j = 0; j < bobSizes.length; j++) {
        if (aliceSizes[i] - bobSizes[j] === expectDiff) {
          return [aliceSizes[i], bobSizes[j]];
        }
      }
    }
  } else {
    for (let k = 0; k < bobSizes.length; k++) {
      for (let l = 0; l < aliceSizes.length; l++) {
        if (bobSizes[k] - aliceSizes[l] === expectDiff) {
          return [aliceSizes[l], bobSizes[k]];
        }
      }
    }
  }

  return [];

};