function findRepeatedDnaSequences(s: string): string[] {
  const seen: Set<string> = new Set();
  const reslut: Set<string> = new Set();

  for (let i = 0; i + 10 <= s.length; i++) {
    const target = s.slice(i, i + 10);
    if (seen.has(target)) {
      reslut.add(target);
    } else {
      seen.add(target);
    }
  }

  return [...reslut];
};