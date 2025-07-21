function countVowelSubstrings(word: string): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let left = 0; left < word.length; left++) {
    let seen = new Set();

    for (let right = left; right < word.length; right++) {
      const char = word[right];
      if (!vowels.has(char)) break;

      seen.add(char);
      if (seen.size === 5) {
        count++;
      }
    }
  }

  return count;
};