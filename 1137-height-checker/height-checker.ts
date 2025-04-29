function heightChecker(heights: number[]): number {
  const expectedHei = [...heights];
  expectedHei.sort((a, b) => a - b);

  let unmatchCount = 0;

  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expectedHei[i]) unmatchCount++;
  }

  return unmatchCount;
    
};