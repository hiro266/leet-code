function areOccurrencesEqual(s: string): boolean {
  const seen = new Map();
  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) {
      seen.set(s[i], seen.get(s[i]) + 1);
      continue;
    }
    seen.set(s[i], 1);
  }

  const values = Array.from(seen.values());

  const tmp = Array.from(seen.values()).every(
    (currentValue) => currentValue === values[0]
  );

  return Array.from(seen.values()).every(
    (currentValue) => currentValue === values[0]
  );

};