function equalFrequency(word: string): boolean {
  // 文字の出現回数をカウント
  const charCount = new Map<string, number>();
  for (const ch of word) {
    charCount.set(ch, (charCount.get(ch) ?? 0) + 1)
  }

  // 文字が1種類ならtrue
  if (charCount.size === 1) return true;

  // 文字の出現回数をカウント
  const countTimes = new Map<number, number>();
  for (const c of charCount.values()) {
    countTimes.set(c, (countTimes.get(c) ?? 0) + 1);
  }

  // すべて同じ回数なら、全て1回出現のときだけ1文字消して整合が取れる
  if (countTimes.size === 1) {
    const [c] = countTimes.keys();
    return c === 1;
  }

  // パターンが2種類以外は1回の文字削除で出現回数が等しくならないのでfalse
  if (countTimes.size !== 2) return false;

  // 小さい回数(a)と大きい回数(b)にソート
  const [[a, na], [b, nb]] = Array.from(countTimes.entries()).sort(
    (x, y) => x[0] - y[0]
  );

  // ケース1: a=1 で、その回数の文字が1つだけ → その1文字を消せば揃う
  if (a === 1 && na === 1) return true;

  // ケース2: b = a+1 で、回数bの文字が1つだけ → その文字を1つ減らせば揃う
  if (b === a + 1 && nb === 1) return true;

  return false;
}
