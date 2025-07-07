function numDifferentIntegers(word: string): number {
  const seen: Set<BigInt> = new Set();

  let tmp = "";
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 97) {
      tmp = tmp + word[i];
    } else {
      if (tmp !== "") seen.add(BigInt(tmp));
      tmp = "";
    }
  }

  if (tmp !== "") seen.add(BigInt(tmp));

  console.log("seen", seen);
  return seen.size;
};