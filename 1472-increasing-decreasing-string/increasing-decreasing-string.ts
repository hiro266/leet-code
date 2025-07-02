function sortString(s: string): string {
  const charCount = new Map();
  for (const char of s) {
    charCount.set(char, (charCount.get(char) ?? 0) + 1);
  }

  const sortedKeys = Array.from(charCount.keys()).sort();
  const sortedKeysReversed = sortedKeys.slice().reverse();

  let totalCharCount = Array.from(charCount.values()).reduce(
    (acc, current) => acc + current
  );

  let result = "";

  while (totalCharCount > 0) {
    let tmp = "";
    for (const ascKeychar of sortedKeys) {
      if (charCount.get(ascKeychar) > 0) {
        tmp = tmp + ascKeychar;
        charCount.set(ascKeychar, charCount.get(ascKeychar) - 1);
        totalCharCount--;
      }
    }

    result = result + tmp;
    tmp = "";

    for (const deskKeychar of sortedKeysReversed) {
      if (charCount.get(deskKeychar) > 0) {
        tmp = tmp + deskKeychar;
        charCount.set(deskKeychar, charCount.get(deskKeychar) - 1);
        totalCharCount--;
      }
    }

    result = result + tmp;
  }

  console.log("result", result);
  return result;
};