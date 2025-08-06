function bestHand(ranks: number[], suits: string[]): string {
  // フラッシュの判定
  if (suits.every((suit) => suits[0] === suit)) return "Flush"

  // 3カードの判定
  const seen = new Map()
  for (const rank of ranks) {
    seen.set(rank, (seen.get(rank) ?? 0) + 1)
  }
  if ([...seen.values()].some((value) => value > 2)) return "Three of a Kind"

  // ペアの判定
  if ([...seen.values()].some((value) => value > 1)) return "Pair"

  // 上記以外はハイカード
  return "High Card"
};