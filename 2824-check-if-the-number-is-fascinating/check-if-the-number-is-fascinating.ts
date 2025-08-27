function isFascinating(n: number): boolean {
  const double = n * 2
  const triple = n * 3
  const mergedNumArr = [n].concat(double, triple).join("").split("")
  if (mergedNumArr.length > 9) return false
  
  const seen = new Set(mergedNumArr)

  return seen.size === 9 && !seen.has("0") ? true : false
};