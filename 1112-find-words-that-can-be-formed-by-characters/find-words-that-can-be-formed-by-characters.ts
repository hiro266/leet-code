function countCharacters(words: string[], chars: string): number {
  const selectedWord = [];

  for (const word of words) {
    const charsCopy = [...chars];
    const wordSplit = [...word];

    if (
      wordSplit.every((char) => {
        if (charsCopy.includes(char)) {
          charsCopy.splice(charsCopy.indexOf(char), 1);
          return true;
        } else {
          return false;
        }
      })
    ) {
      selectedWord.push(word);
    }
  }

  return selectedWord.join("").length;
};