function areAlmostEqual(s1: string, s2: string): boolean {
  // 交換前に等しい場合、true
  if (s1 === s2) return true;

  // s1 と s2 の文字構成が異なる場合、false
  const sortedS1 = s1.split("").sort();
  const sortedS2 = s2.split("").sort();
  if (JSON.stringify(sortedS1) !== JSON.stringify(sortedS2)) return false;

  // 文字のずれが 2 の場合、true
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) count++;
    if (count > 2) return false;
  }

  return count === 2 ? true : false;
};