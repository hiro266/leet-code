function canBeTypedWords(text: string, brokenLetters: string): number {
  const split = text.split(" ");

  let count = 0;
  for (const str of split) {
    let isGoodStr = true;
    for (let i = 0; i < brokenLetters.length; i++) {
      if (str.includes(brokenLetters[i])) {
        isGoodStr = false;
        break;
      }
    }
    if (isGoodStr) count++;
  }

  return count;
};