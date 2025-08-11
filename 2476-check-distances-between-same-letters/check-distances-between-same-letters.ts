function indicesOf(str: string, sub: string): number[] {
  if (sub.length === 0) return [];
  const res: number[] = [];
  let from = 0;

  while (true) {
    const i = str.indexOf(sub, from);
    if (i === -1) break;
    res.push(i);
    from = i + 1;
  }
  return res;
}

function checkDistances(s: string, distance: number[]): boolean {
  const MAP = new Map<string, number>([...Array(26)].map((_, i) => [String.fromCharCode(97 + i), i]));
  const seen = new Set(s)

  for (const char of seen) {
    const indexs = indicesOf(s, char)
    const charSpacing = (indexs[1] - indexs[0]) - 1
    const i = MAP.get(char)!;
    if (charSpacing !== distance[i]) return false
  }

  return true
};