function longestSubstring(s: string, k: number): number {
  if (s.length === 0 || s.length < k) return 0;

  const candidate: string[] = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const target: string = s.slice(i, j);
      const charCount: Map<string, number> = new Map();

      for (const char of target) {
        charCount.set(char, (charCount.get(char) ?? 0) + 1);
      }

      if ([...charCount.values()].every((num) => num >= k)) {
        candidate.push(target);
      }
    }
  }

  const reslut = Math.max(...candidate.map((str) => str.length));
  return isFinite(reslut) ? reslut : 0;
}
