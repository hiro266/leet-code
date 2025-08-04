function decodeMessage(key: string, message: string): string {
  const map: Map<string, string> = new Map([[" ", " "]])
  let currentCharCode: number = 97 // 97: a ← 10進法: 文字列

  for (const char of key.split("")) {
    if (!map.has(char)) {
      map.set(char, String.fromCharCode(currentCharCode))
      currentCharCode++
    }
  }

  let decodedMsg = ""
  for (const char of message) {
    decodedMsg = decodedMsg + map.get(char)
  }

  return decodedMsg
};