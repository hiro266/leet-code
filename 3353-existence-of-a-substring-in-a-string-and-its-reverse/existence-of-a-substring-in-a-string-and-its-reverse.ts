function isSubstringPresent(s: string): boolean {
  const subStrings = []
  for (let i = 0; i < s.length - 1; i++) {
    subStrings.push(s.slice(i, i + 2))
  }

  const reversedStr = s.split("").reverse().join("")
  return subStrings.some((str) => reversedStr.includes(str)) ? true : false
};