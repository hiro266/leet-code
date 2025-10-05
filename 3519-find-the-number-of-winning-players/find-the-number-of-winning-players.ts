function winningPlayerCount(n: number, pick: number[][]): number {
  const freq: Map<number, Record<number, number>> = new Map()
  let winners = 0

  for (const [player, ball] of pick) {
    const playerFreq: Record<number, number> = freq.get(player) ?? {}
    playerFreq[ball] = (playerFreq[ball] ?? 0) + 1;

    freq.set(player, playerFreq)
  }

  for (const [player, ballMap] of freq) {
    for(const [ball, count] of Object.entries(ballMap)) {
      if (count > player) {
        winners ++
        break
      }
    }
  }

  return winners
};