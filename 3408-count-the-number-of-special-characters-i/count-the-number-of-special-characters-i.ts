function numberOfSpecialChars(word: string): number {
  const upperCase: Set<string> = new Set()
  const lowerCase: Set<string> = new Set()

  for (let i = 0; i < word.length; i++) {
    const char = word[i]
    if (word.charCodeAt(i) >= 97) {
      lowerCase.add(char)
    } else {
      upperCase.add(char)
    }
  }

  let specialCharCount = 0

  for (const char of upperCase) {
    if (lowerCase.has(char.toLowerCase())) {
      specialCharCount++
    }
  }

  return specialCharCount

};