function digitCount(num: string): boolean {
  const seen = new Map();
  for (let i = 0; i < num.length; i++) {
    seen.set(num[i], (seen.get(num[i]) ?? 0) + 1);
  }

  for (let i = 0; i < num.length; i++) {
    const expectedCount = Number(num[i]);
    const actualCount = seen.get(String(i)) ?? 0;

    if (expectedCount !== actualCount) return false;
  }

  return true

};