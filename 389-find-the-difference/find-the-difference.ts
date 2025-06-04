function findTheDifference(s: string, t: string): string {
  if (!s) return t;

  for (const tChar of t) {
    if (!s.includes(tChar)) return tChar;
    s = s.replace(tChar, "");
  }

  return "";
};