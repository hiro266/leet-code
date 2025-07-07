function secondHighest(s: string): number {
  const seen: Set<number> = new Set();

  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) < 97 && !isNaN(Number(s[i]))) {
      seen.add(Number(s[i]));
    }
  }

  if (seen.size < 2) return -1;
  return [...seen].sort((a, b) => b - a)[1];
};