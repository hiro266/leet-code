function commonChars(words: string[]): string[] {
  let wordFrequencies = new Map();
  words[0].split("").map((word) => {
    if (wordFrequencies.has(word)) {
      wordFrequencies.set(word, wordFrequencies.get(word) + 1);
    } else {
      wordFrequencies.set(word, 1);
    }
  });

  for (let i = 1; i < words.length; i++) {
    const newWordFrequencies = new Map();
    const splittedWord = words[i].split("");

    for (let j = 0; j < splittedWord.length; j++) {
      if (wordFrequencies.has(splittedWord[j])) {
        if (
          newWordFrequencies.has(splittedWord[j]) &&
          newWordFrequencies.get(splittedWord[j]) <
          wordFrequencies.get(splittedWord[j])
        ) {
          newWordFrequencies.set(
            splittedWord[j],
            newWordFrequencies.get(splittedWord[j]) + 1
          );
        } else if (!newWordFrequencies.has(splittedWord[j])) {
          newWordFrequencies.set(
            splittedWord[j],
            Math.min(1, wordFrequencies.get(splittedWord[j]))
          );
        }
      }
    }

    wordFrequencies = newWordFrequencies;
  }

  const result = [];
  for (const [key, value] of Array.from(wordFrequencies)) {
    result.push("".padEnd(value, key).split(""));
  }

  return result.flatMap((arr) => arr);
};