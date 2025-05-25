const keyboards: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
  "": "",
};

const main = (digits: string): string[] => {
  const result: string[] = [];
  if (!digits) return result; // 空文字早期リターン

  const backtrack = (index: number, path: string) => {
    // 0, "" -> 1, "a" -> 2, "ad"　-> 3, "adg"
    // 3, "adh"
    // 3, "adi"
    // 2, "ae"
    if (index === digits.length) {
      result.push(path);
      // "adg" → "adh" → "adi"
      return;
    }

    const letters = keyboards[digits[index]];
    // "abc" -> "def" -> "ghi" → "def"
    for (const letter of letters) {
      backtrack(index + 1, path + letter);
      // backtrack(1, "a") ->  backtrack(2, "ad") -> backtrack(3, "adg") -> "adg"がresultにpushされてreturnで次のループ(g → h)へ進む
      // backtrack(3, "adh") → "adh"がresultにpushされてreturnで次のループ(h -> i)へ進む
      // backtrack(3, "adi") → "adi"がresultにpushされてreturnで今のループ(letters = ghi)を抜けて、前のループ(letters = def)へ進む
      // backtrack(2, "ae") → backtrack(3, "aed") → "aed"がresultにpushされてreturnで次のループ(d → e)へ進む
    }
  };

  backtrack(0, ""); // -> start
  return result;
};

main("234");
