function uniqueMorseRepresentations(words: string[]): number {

  const morseCodes = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const morseMap = new Map();

  for (let i = 0; i < alphabet.length; i++) {
    morseMap.set(alphabet[i], morseCodes[i]);
  }

  const morseCount = new Map();

  for (const word of words) {
    let alphabetToMorseCode = "";
    for (const char of [...word]) {
      alphabetToMorseCode = alphabetToMorseCode + morseMap.get(char);
    }
    morseCount.set(
      alphabetToMorseCode,
      (morseCount.get(alphabetToMorseCode) ?? 0) + 1
    );
  }

  return Array.from(morseCount.keys()).length;

};