function circularGameLosers(n: number, k: number): number[] {
  const seen = new Set()
  const PLAYESR_COUNT = n
  let gameCount = 1
  let currentBallHolder = 1

  while (true) {
    if (seen.has(currentBallHolder)) {
      const result = []
      const playersSequenceNumber = [...Array(PLAYESR_COUNT)].map((_, i) => i + 1)
      for (const playerNum of playersSequenceNumber) {
        if (!seen.has(playerNum)) {
          result.push(playerNum)
        }
      }
      console.log("result", result)
      return result
    }
    seen.add(currentBallHolder)
    currentBallHolder = ((currentBallHolder - 1 + (k * gameCount)) % PLAYESR_COUNT) + 1
    gameCount++
  }

};